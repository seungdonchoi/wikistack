const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:8080/wikistack')

module.exports = {
  db
}
