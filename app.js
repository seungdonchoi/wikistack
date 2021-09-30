const express = require('express');
const app = express();
const morgan = require('morgan')
const layout = require('./views/layout')
const { db } = require('./models');

app.use(express.static('public'))

app.get("/", async (req, res, next) => {
  res.send(layout(''))
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


app.listen(8080)


