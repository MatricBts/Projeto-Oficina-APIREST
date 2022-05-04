const Sequelize = require('sequelize');
const database = require('./../infra/db');

const Cliente = database.define('cliente', {
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
  endereco:{
    type: Sequelize.STRING,
    allowNull: false
  },
  cidade: {
      type: Sequelize.STRING,
      allowNull: false
  }, 
  estado: {
      type: Sequelize.STRING,
      allowNull: false
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false
  }
   
})

module.exports = Cliente;