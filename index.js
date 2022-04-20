const express = require("express");
const peças = require('./src/routes/peças.routes')

const routes = (app) => {
    app.route('/').get((req,res) =>{
        res.status(200).send('teste')
    })

    app.use(
        express.json(),
        peças
    )
}//dale
module.exports = routes;