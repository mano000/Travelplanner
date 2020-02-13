const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//const mongo_url ='mongodb://192.168.10.2/inventory';
const mongo_url ='mongodb://127.0.0.1/Inventory';
mongoose.connect(mongo_url, {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${mongo_url}`));


