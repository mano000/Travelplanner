const express =require ('express');
const graphqlHTTP =require ('express-graphql');
const cors =require ('cors');
const schema =require ('./schema.js');
const path =require('path');

const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');

//const EXIF =require('./client/src/exif.js/index.js')

require('dotenv').config(); // Configure dotenv to load in the .env file


// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);
//log errors to the console
AWS.config.logger = console.log

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    //Bucket:"travelplannerimagebucket",
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
    //Key: process.env.AWS_ACCESS_KEY_ID
  };
  return s3.upload(params).promise();
};


const app = express();

// Define POST route
app.post('/test-upload', (request, response) => {
  const form = new multiparty.Form();
    form.parse(request, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timestamp = Date.now().toString();
        const fileName = `bucketFolder/${timestamp}-mm-${Math.random().toString(16).slice(-4)}`;
        const data = await uploadFile(buffer, fileName, type);

       // EXIF.getData(files.file[0], function() {
       //   myData = this;
       // console.log(myData.exifdata);
      //});
        //console.log(myData);

        return response.status(200).send(data);
      } catch (error) {
        return response.status(400).send(error);
      }
    });
});




//Allow crossorigin

app.use (cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.use(express.static('public'));
app.get ('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
const PORT =process.env.PORT ||5000;

app.listen(PORT, () => console.log (`Server started on port ${PORT}`));
