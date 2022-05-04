const Sequelize = require('sequelize');
const database = require('../infra/db');

const Vendas = database.define('Vendas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Data: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Preço: Sequelize.STRING,
  pedido: Sequelize.INTEGER,
  qtd: Sequelize.INTEGER,
  vencimento: {
    type: Sequelize.INTEGER,
    allowNull: false
  },


})

module.exports = Vendas;