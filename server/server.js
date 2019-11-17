const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
//const knex = require("knex");
const db = require("knex");

const knex = require('knex')({
  client: 'pg',
  version: '7.12.1',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : "",
    database : 'setting_up1'
  }
});

//static server
app.use(express.static(path.join(__dirname, "./build")));

const port = process.env.PORT || 4000;

app.listen(port, ( ) => {
  console.log(`Listening on port ${port}`)
});


app.get("/api/people", async (req, res) => {
  try {
    const test = "RANOM STRING"
    // const people = await db("setting_up1").select();
    let people = await knex("setting_up1").select();
    //people = JSON.stringify(people);
    res.json(people);
  } catch (err) {
    console.error("Error loading people!", err);
    res.sendStatus(500);
  }
});