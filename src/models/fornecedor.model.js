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
  marca: Sequelize.STRING,
  pedido: Sequelize.INTEGER,
  qtd: Sequelize.INTEGER,
  vencimento:{
    type: Sequelize.INTEGER,
    allowNull: false
  },

   
})

module.exports = fornecedor;