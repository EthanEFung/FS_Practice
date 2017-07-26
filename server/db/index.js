// create some models
const Sequelize = require('sequelize');
const db = require('.config');
// create some relationships
const List = db.define('list', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

const Entry = db.define('entry', {
  errand: {
    rype: Sequelize.STRING,
    allowNull: false,
  }
})
List.hasMany(Entry, { foreignKey: { name: 'list_id', allowNull: false }, onDelete: 'CASCADE' });
Entry.belongsTo(List, { foreignKey: { name: 'list_id', allowNull: false }, onDelete: 'CASCADE' });

// sync up database  //creates tables on your database
List.sync({force: true});
Entry.sync({force: true});

// export
module.exports = {
  List,
  Entry
}