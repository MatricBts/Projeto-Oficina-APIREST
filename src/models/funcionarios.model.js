const Sequelize = require('sequelize');
const sequelize = require('./../infra/db');
const database = require('./../infra/db');

const funcionario = database.define('funcionario', {
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
    type: Sequelize.STRING,
    allowNull: false
  }, 
  admissão:Sequelize.INTEGER, 
  nctps: Sequelize.INTEGER, 
  pis: Sequelize.INTEGER,
  cargo: Sequelize.STRING,
  salario: Sequelize.INTEGER,
  cpf:Sequelize.INTEGER,
  rg: Sequelize.INTEGER,
  estcivil: Sequelize.STRING,
  nascimento: Sequelize.STRING,
  jornasdacontrat: Sequelize.STRING,
  endereco: Sequelize.INTEGER,
  cep: Sequelize.INTEGER,
  bairro: Sequelize.INTEGER,
  email: {
    type: Sequelize.INTEGER, 
    allowNull: false
  }, 
})

module.exports = funcionario;