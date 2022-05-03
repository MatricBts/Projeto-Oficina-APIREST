const Sequelize = require('sequelize');
const sequelize = require('./../infra/db');
const database = require('./../infra/db');

const employeer = database.define('employeer', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  matricula:{
    type: Sequelize.STRING,
    allowNull: false
  },
  nome:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  telefone:{
    type: sequelize.STRING,
    allowNull: false
  }, 
  admissão:sequelize.INTEGER, 
  nctps: sequelize.INTEGER, 
  pis:sequelize.INTEGER,
  cargo: Sequelize.STRING,
  salario: Sequelize.INTEGER,
  cpf:sequelize.INTEGER,
  rg: sequelize.INTEGER,
  estcivil: sequelize.STRING,
  nascimento: sequelize.STRING,
  jornasdacontrat: sequelize.STRING,
  endereco:sequelize.INTEGER,
  cep: sequelize.INTEGER,
  bairro:sequelize.INTEGER,
  email: {
    type: sequelize.INTEGER, 
    allowNull: false
  }, 
})

module.exports = employeer;