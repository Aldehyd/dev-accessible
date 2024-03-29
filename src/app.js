require('dotenv').config();

const express = require("express");
const mongo = require("mongodb");
const cors = require("cors");

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.STRING_URI;
const dbName = process.env.STRING_DBNAME;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const app = express();
const port = process.env.PORT ||4000;

app.listen(port, ()=> {
    console.log("server successfully started");
});

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.get('/cv',async(req,res)=>{
    await client.connect((err,db)=> {
        console.log("successfully connected to db")
        if(err || !db) {
            return false;
        };
        db.db(dbName).collection("achievments").find().toArray(
            function(err,results) {
                if(!err) {
                    res.status(200).send(results);
                };
            }
        );
    });
});


