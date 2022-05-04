const Sequelize = require('sequelize');
const database = require('./../infra/db');

const Cliente = database.define('Seguradoras', {
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

module.exports = Seguradoras;