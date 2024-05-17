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

app.get('/page-content',(req,res)=> {
    GetPageContent(res,req.query['page']);
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

async function GetPageContent(res,page) {
    const uri = process.env.STRING_URI;
    const client = new MongoClient(uri);
    const dbName = process.env.STRING_DBNAME;

    try {
        await client.connect();
        const doc = await client.db(dbName).collection('pages-content').find({page: page});
        const array = await doc.toArray();
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

//--------------- search engine ------------------//

app.get("/search",(req,res)=> {
    
    const searchQuery = req.query['query'];
    const language = req.query['language'];
    const environnement = req.query['environnement'];

    let searchResults = [];
    
    async function Search() {
        
        const uri = process.env.STRING_URI;
        const client = new MongoClient(uri);
        const dbName = process.env.STRING_DBNAME;
    
        try {
            await client.connect();
            const docs = await client.db(dbName).collection('pages-content').find();
            const array = await docs.toArray();
            
            for(let page of array) {
    
                let paragraphs = page.content.filter(content => content.type === 'paragraph');
                let notes = page.content.filter(content => content.type === 'note');
                let quotes = page.content.filter(content => content.type === 'quote');
                let lists = page.content.filter(content => content.type === 'list');
                let definitionLists = page.content.filter(content => content.type === 'definition-list');

                if(environnement === "client") {
                    if(page.clientContent !== undefined) {
                        paragraphs = [...paragraphs,...page.clientContent.filter(content => content.type === 'paragraph')];
                        notes = [...notes,...page.clientContent.filter(content => content.type === 'note')];
                        quotes = [...quotes,...page.clientContent.filter(content => content.type === 'quote')];
                        lists = [...lists,...page.clientContent.filter(content => content.type === 'list')];
                        definitionLists= [...definitionLists,...page.clientContent.filter(content => content.type === 'definition-list')];
                    }
                }

                let paragraphsContents = [];
                let notesContents = [];
                let quotesContents = [];
                let listsContents = [];
                let definitionListsContents = [];
                if(language === "french") {
                    paragraphsContents = paragraphs.map(paragraph => {return paragraph.frenchContent});
                    notesContents = notes.map(note => {return note.frenchContent});
                    quotesContents = quotes.map(quote => {return quote.frenchContent});
                    listsContents = lists.map(list => {return list.frenchContent});
                    definitionListsContents = definitionLists.map(list => {return list.frenchContent});
                } else {
                    paragraphsContents = paragraphs.map(paragraph => {return paragraph.englishContent});
                    notesContents = notes.map(note => {return note.englishContent});
                    quotesContents = quotes.map(quote => {return quote.englishContent});
                    listsContents = lists.map(list => {return list.englishContent});
                    definitionListsContents = definitionLists.map(list => {return list.englishContent});
                };

                const paragraphsResults = paragraphsContents.filter(paragraph => paragraph.includes(searchQuery));
                const notesResults = notesContents.filter(note => note.includes(searchQuery));
                const quotesResults = quotesContents.filter(quote => quote.includes(searchQuery));

                let listsResults = [];
                for(let list of listsContents) {
                    const lines = list.filter(line => line.includes(searchQuery));
                    if(lines.length > 0)
                        listsResults = [...listsResults,lines];
                };
                let definitionListsResults = [];
                for(let list of definitionListsContents) {
                    const lines = list.filter(line => line.includes(searchQuery));
                    if(lines.length > 0)
                        definitionListsResults = [...listsResults,lines];
                };

                const updateSearchResults = (untransformedResults,searchResults) => {

                    const generateResults = (results) => {
                        return results.map(result => {return {title: page.frenchTitle, content: result, link: page.page} })
                    };

                    const finalResults = generateResults(untransformedResults);

                    return finalResults;
                };
                
                if(paragraphsResults.length > 0)
                    searchResults = [...searchResults,...updateSearchResults(paragraphsResults,searchResults)];
                if(notesResults.length > 0)
                    searchResults = [...searchResults,...updateSearchResults(notesResults,searchResults)];
                if(quotesResults.length > 0)
                    searchResults = [...searchResults,...updateSearchResults(quotesResults,searchResults)];
                if(listsResults.length > 0)
                    searchResults = [...searchResults,...updateSearchResults(listsResults,searchResults)];
                if(definitionListsResults.length > 0)
                    searchResults = [...searchResults,...updateSearchResults(definitionListsResults,searchResults)];
                
            };    
            res.send(JSON.stringify(searchResults));
        } catch(err) {
            res.send(err);
        }  finally {
            await client.close();
        }
    }
    
    Search();
});

//handle redirections
app.use((req, res) => { 
    res.status(404).sendFile(path.join(__dirname,'/dist/index.html')) 
}) 
