const Sequelize = require('sequelize');
const database = require('../config/db');
const Pecas = require('../../src/models/Pecas.model')

const pecaRepositories = {
    cadastrar: async function(){
        await Pecas.create({
            nome: 'tauba',
        })
    }
}

module.exports = pecaRepositories ;