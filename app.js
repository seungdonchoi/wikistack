const express = require('express');
const app = express();
const morgan = require('morgan')
const layout = require('./views/layout')
const { db } = require('./models');

app.use(express.static('public'))

app.get("/", async (req, res, next) => {
  res.send(layout(''))
})


async function auth() {
  try {
    await db.authenticate().then(() => {
      console.log('connected to the database');
    })
  } catch (err) {
    console.log(err);
  }
}

async function init() {
  try {
    await db.authenticate().then(() => {
      console.log('connected to the database');
    })
    //await db.sync()
    app.listen(8080, () => {
      console.log("hi im listening")
    });
  } catch (err) {
    console.log(err);
  }
}
init();


