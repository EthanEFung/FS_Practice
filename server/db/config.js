// create connection to db
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://lgdwepfa:O-YaJAWNdy2mZtcuoYzSmhe224YiFCM-@babar.elephantsql.com:5432/lgdwepfa', {
  dialect: 'postgres',
});
console.log('Connected to remote db');

module.exports = db;