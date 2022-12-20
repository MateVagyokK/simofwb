/*  This is the main file that handles the routing and the data request.
    Saskó Máté
*/
const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require('./database');
app.set('view engine' , 'ejs');
app.use(express.static(__dirname + '/public'));

//  Gets all posts from database
const getPosts = async () => {
  const data = await db.query("SELECT * FROM works");
  return {
    data,
  };
};

//  Gets all posts from database and prints it at /posts
app.get("/posts", async (req, res, next) => {
  try {
    res.send(await getPosts());
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//  Stores and formats data that comes from database and renders the page
app.get("/",async (req,res)=>{
  let mydata = await (await getPosts())
  mydata = await mydata["data"]
  let formattedData = [];
  for (let index = 0; index < mydata.length; index++) {
    let tmp = mydata[index];
    let idg = {workId:tmp.workId, name:tmp.name, description:tmp.description, pics: tmp.pics.split(';')};
    formattedData.push(idg);
  }
  res.render("index", {adat : formattedData
  })
}).listen(3000);