const Sequelize = require('sequelize');
const sequelize = new Sequelize('oficina', 'root', 'pass', {
    dialect:'sqlite',
    host:'./infra/config/database.db'
})

module.exports = sequelize;