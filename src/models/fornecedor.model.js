const Sequelize = require('sequelize');
const database = require('../infra/db');

const fornecedor = database.define('fornecedor', {
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
  vencimento:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  categoria: Sequelize.STRING,
  quantidade: Sequelize.INTEGER,
  marca: Sequelize.STRING,
  garantia: Sequelize.INTEGER
   
})

module.exports = fornecedor;