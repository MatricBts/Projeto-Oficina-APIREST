const Sequelize = require('sequelize');
const database = require('./../infra/db');

const Seguros = database.define('Seguros', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome:{
    type: Sequelize.STRING,
    allowNull: false
  },
  
  email: {
      type: Sequelize.STRING,
      allowNull: false
  }
   
})

module.exports = Seguros;