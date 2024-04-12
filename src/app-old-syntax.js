require('dotenv').config();

const express = require("express");
const cors = require("cors");

const { MongoClient } = require('mongodb');

const app = express();
const port = 4000;

app.listen(port, ()=> {
    console.log("server successfully started");
});

app.use(cors());
app.use(express.json());

app.get('/cv-status',(_,res)=>{
    GetDatasFromCollection(res,"availableStatus");
});

app.get('/cv-achievments',(_,res)=>{
    GetDatasFromCollection(res,"achievments");
});

app.get('/cv-diplomas',(_,res)=>{
    GetDatasFromCollection(res,"diplomas");
});

app.get('/cv-languages',(_,res)=>{
    GetDatasFromCollection(res,"languages");
});






function GetDatasFromCollection(res,collection) {
    console.log("launch getDatasFromCollection")

    const uri = process.env.STRING_URI;
    const client = new MongoClient(uri);
    const dbName = process.env.STRING_DBNAME;
    console.log(dbName)

        client.connect()
        .then(result => {
            client.db(dbName).collection(collection).find().toArray(function(err,results) {
                if(!err) {
                    res.send(results)
                } else {
                    console.log(err)
                }
            })
            .then(result => { 
                res.send(result)
                console.log(result)}
            )
        })
 
}