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

app.post("/search",(req,res)=> {
    const playwright = require("playwright");

    (async () => {
      // Launch a new instance of a Chromium browser
      const browser = await playwright.chromium.launch({
        // Set headless to false so you can see how Playwright is
        // interacting with the browser
        headless: false,
      });
      // Create a new Playwright context
      const context = await browser.newContext();
      // Create a new page/tab in the context.
      const page = await context.newPage();
    
      // Navigate to the home page.
      await page.goto("https://dev-accessible.com/");

    //   const linksToScan = ["Réalisations","Pourquoi l'accessibilité ?","Mentions légales","Confidentialité"];
      const frenchLinksToScan = ["Réalisations","Pourquoi l'accessibilité ?","Mentions légales","Confidentialité"];
      const englishLinksToScan = ["Achievments","Why accessibility ?","Legal mentions","Privacy"];
      const url = ["achievments","why-accessibility","legal-mentions","privacy-policy"];

      let results = [];
     
      const searchQuery = req.body.query;
      const language = req.body.language;
      const environnement = req.body.environnement;
      
      async function Search(language,environnement,frenchLinks,englishLinks) {

        let links = [];

        if(language === "french") {
            links = frenchLinks;
        } else {
            links = englishLinks;
            await page.locator(".language-select").click();
            await page.locator(".language-select_center_en").click();
            await page.locator(".confirm-modal_buttons-container .basic-button-container:first-child").click();
        };

        await page.locator(".environnement-toggle-button").click();
        await page.locator(".confirm-modal_buttons-container .basic-button-container:first-child").click();
        if(environnement === "client") {
            await page.locator(".environnement-toggle-button").click();
            await page.locator(".confirm-modal_buttons-container .basic-button-container:first-child").click();
        };

        for(let link of links) {
            await page.getByRole('link',{name: link}).click();
            const title = await page.locator("h1").innerText();
            const lines = await page.locator(`li:has-text("${searchQuery}")`).allInnerTexts();
            const paragraphs = await page.locator(`p:has-text("${searchQuery}")`).allInnerTexts();
            const urlLink = url[frenchLinksToScan.indexOf(link)];
    
            const newResult = {
                title: title,
                lines: lines,
                paragraphs: paragraphs,
                link: urlLink
            };
            results = [...results,newResult];
    
            await page.locator(".back-link").click();
          };
          console.log(JSON.stringify(results))
          res.send({results: JSON.stringify(results)});

          // Close the browser
            await browser.close();
      };

    Search(language,environnement,frenchLinksToScan,englishLinksToScan);

      // Wait 10 seconds (or 10,000 milliseconds)
    //   await page.waitForTimeout(10000);
    
      
    })();
});

//handle redirections
app.use((req, res) => { 
    res.status(404).sendFile(path.join(__dirname,'/dist/index.html')) 
}) 
