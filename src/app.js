require('dotenv').config();

const path = require("path");
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

const public_path = path.join(__dirname,'/dist');

app.use('/',express.static(public_path));

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

//---------------- mails --------------------//
const nodemailer = require("nodemailer");

app.post("/send_mail",(req,res)=> {
    let config = {
        host: 'node45-eu.n0c.com',
        port : 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false,
        }
    }

    let transporter = nodemailer.createTransport(config);

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `message from ${req.body.userMail} - ${req.body.subject}`,
        text: req.body.messageContent
    };

    transporter.sendMail(mailOptions,(error)=> {
        if(error){
            res.status(500).json()
        } else {
            res.status(200).json()
        };
    });

});

//----------- send simulation ----------------//
app.post("/send_simulation",(req,res)=> {
    let config = {
        host: 'node45-eu.n0c.com',
        port : 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false,
        }
    }

    let transporter = nodemailer.createTransport(config);

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `simulation from ${req.body.userMail}`,
        html: `<h2>Simulation :</h2>${req.body.simulation}<h2>Commentaires :</h2><p>${req.body.messageContent}</p>`
    };

    transporter.sendMail(mailOptions,(error)=> {
        if(error){
            res.status(500).json()
        } else {
            res.status(200).json()
        };
    });

});