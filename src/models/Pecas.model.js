const Sequelize = require('sequelize');
const database = require('./../../infra/config/db.js');

const Peca = database.define('peca', {
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
    // preço:{
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    // categoria: Sequelize.STRING,
    // quantidade: Sequelize.INTEGER,
    // marca: Sequelize.STRING,
    // garantia: Sequelize.INTEGER
   
})

module.exports = Peca;