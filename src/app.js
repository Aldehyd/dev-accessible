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

app.get('/',(_,res)=>{
    res.send('hello world');
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


async function GetDatasFromCollection(res,collection) {
    const uri = process.env.STRING_URI;
    const client = new MongoClient(uri);
    const dbName = process.env.STRING_DBNAME;

    try {
        await client.connect();
        const docs = await client.db(dbName).collection(collection).find();
        const array = await docs.toArray();
        res.send(array)
    } catch(err) {
        res.send(err)
    }  finally {
        await client.close();
    }
}


