const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean ,GraphQLList,GraphQLSchema,GraphQLID,GraphQLNonNull }= require ('graphql');
const axios =require ('axios');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const ObjectId = mongoose.Types.ObjectId;

const mongo_url ='mongodb://127.0.0.1/Inventory';
//const mongo_url ='mongodb://192.168.10.2/inventory';
mongoose.connect(mongo_url, {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${mongo_url}`));
//Travel Type


const ItemModel = mongoose.model("items", {
    //_id: mongoose.Schema.Types.ObjectId,
    itemname: String,
    latitude: String,
    longitude: String,
    photo: String,
    description: String,
    price: String,
    currency: String,
    calification: String,
    date: String,
    actiontype: String,
    owner: String,
    promoted: String,
    datepromoted: String,
    documents_link: String,
    public: Boolean
});


const ItemType = new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
        _id: {type: GraphQLID},
        itemname:{type: GraphQLString},
        latitude: {type: GraphQLString},
        longitude: {type: GraphQLString},
        photo: {type: GraphQLString},
        description : {type:GraphQLString},
        price: {type: GraphQLInt},
        currency: {type: GraphQLString},
        calification: {type: GraphQLString},
        date: {type: GraphQLString},
        actiontype: {type: GraphQLString},
        owner: {type: UserType},
        promoted: {type: GraphQLString},
        datepromoted: {type: GraphQLString},
        documents_link: {type: GraphQLString},
        public: {type: GraphQLBoolean}
    })
});

const UserType = new GraphQLObjectType({
        name: 'User',
        fields: () => ({
            username:{type: GraphQLString},
            email:{type: GraphQLString},
            first_name:{type: GraphQLString},
            last_name:{type: GraphQLString},
            date_registered:{type: GraphQLString},
            bith_date:{type: GraphQLString},
        
        })
        

});
const LocationType =new GraphQLObjectType ({

    name:'Location',
    fields: () => ({
            name: {type: GraphQLString},	//"Cape Canaveral"
            region: {type: GraphQLString},	//"Florida"
            latitude: {type: GraphQLString},//	28.485833
            longitude: {type: GraphQLString}	//-80.544444
    })


});


const TravelType = new GraphQLObjectType ({

    name: 'Travel',
    fields: () => ({
        flight_number:  {type: GraphQLInt},
        mission_name:  {type: GraphQLString},
        launch_year:  {type: GraphQLString},
        launch_date_local:  {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        rocket: {type: RocketType}


    })


});

const RocketType =new GraphQLObjectType ({

    name: 'Rocket',
    fields: () => ({
        rocket_id:  {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString}
    })


});

const LandpadsType = new GraphQLObjectType ({
    name:'Landpads',
    fields: () => ({

        id: {type: GraphQLString},
        full_name: {type: GraphQLString},	//"Landing Zone 1"
        status: {type: GraphQLString}, //	"active"
        location: {type: LocationType},
    landing_type: {type: GraphQLString},	//"RTLS"
    attempted_landings: {type: GraphQLString},	//12
    successful_landings: {type: GraphQLString},	//11
    wikipedia	: {type: GraphQLString}, //"https://en.wikipedia.org/wiki/Landing_Zones_1_and_2"
    details: {type: GraphQLString}
    })
});



//Root query


const ItemQuery =new GraphQLObjectType({
    name: 'ItemQueryType',
    fields: {
        items: {
            type: new GraphQLList(ItemType),
            resolve (parent,args) {
                
                return ItemModel.find().exec();

            }
        },
       item: {
           type:  ItemType,
           args:{
               _id: {type: GraphQLString}
           },
           resolve (parent,args) {

            return ItemModel.findOne(ObjectId(args._id))
           }
       }
    }
});

const Itemmutation= new GraphQLObjectType({
    name: "additemMutation",
    fields: {
        item: {
            type: ItemType,
            args: {
                itemname: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                //initial_location: {type: LocationType},
                //final_location: {type: LocationType},
                latitude: {type: GraphQLNonNull(GraphQLString)},
                longitude: {type: GraphQLNonNull(GraphQLString)},
                photo: {type: GraphQLString},
                description : {type:GraphQLString},
                price: {type: GraphQLInt},
                currency: {type: GraphQLString},
                calification: {type: GraphQLString},
                date: {type: GraphQLString},
                actiontype: {type: GraphQLString},
                //owner: {type: UserType},
                promoted: {type: GraphQLString},
                datepromoted: {type: GraphQLString},
                documents_link: {type: GraphQLString},
                public: {type: GraphQLBoolean}

            },
            resolve: (root, args, context, info) => {
                var newitem = new ItemModel(args);
                return newitem.save();
            }
        },
        
       
       deleteitem: {
           type: ItemType,
           args:{
            _id: {type: GraphQLString}
                },
             resolve (parent,args) {


            return ItemModel.deleteOne({_id:args._id})
    }


       }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        travels: {
            type: new GraphQLList(TravelType),
            resolve (parent,args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        },

        launch: {
            type: TravelType,
            args:{
                flight_number: { type: GraphQLInt}
            },
            resolve (parent,args){
                return axios
                .get (`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                .then( res => res.data);
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve (parent,args) {
                return axios.get('https://api.spacexdata.com/v3/rockets')
                    .then(res => res.data);
            }
        },
        landpads: {
            type: new GraphQLList(LandpadsType),
            resolve (parent,args) {
                return axios.get('https://api.spacexdata.com/v3/landpads')
                    .then(res => res.data);
            }
        },

        rocket: {
            type: RocketType,
            args:{
                id: { type: GraphQLInt}
            },
            resolve (parent,args){
                return axios
                .get (`https://api.spacexdata.com/v3/rockets/${args.id}`)
                .then( res => res.data);
            }
        }
    }
});


module.exports = new GraphQLSchema ({
    //query: RootQuery
    query: ItemQuery,
    mutation: Itemmutation
});