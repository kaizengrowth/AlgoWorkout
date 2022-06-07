const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { MongoClient, ServerApiVersion } = require('mongodb');

const MONGO_URI = 'mongodb+srv://kaizengrowth:codesmith@kz-soloproject.a5wlyjv.mongodb.net/?retryWrites=true&w=majority';

// mongodb connection
/*
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'algos'
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

// schema for 'algo'
const algoSchema = new Schema({
    name: String,
    link: String,
    level: String,
    description: String,
    patterns: [String],
    topics: [String],
    companies: [String],
    dates: [Date],
    kanban: String,
    score: Number,
    confidence: Number,
    notes: String
})