const Sequelize = require('sequelize');
const sequelize = new Sequelize('oficina', 'root', 'pass', {
    dialect:'sqlite',
    host:'./src/infra/database.db'
})

module.exports = sequelize;