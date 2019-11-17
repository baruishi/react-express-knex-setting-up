//const fs = require('fs');
//const knex = require("knex");

console.log("argdgr");

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

knex('setting_up1')
  .insert({ 
    name: "Grzegorz",
    surname: "Brzeczyszczykiewicz",
    description: "fictional character"
  })
  .then(() => knex('setting_up1').select());
