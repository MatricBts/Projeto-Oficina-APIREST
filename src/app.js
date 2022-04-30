const express = require("express");
const peças = require('./routes/pecas.routes')
const usuarios = require("./routes/usuarioRoutes")

const routes = (app) => {
  app.route('/').get((req,res) =>{
    res.status(200).send('Projeto Resilia Modulo 4 - API REST Oficina Mecânica')
  })

  app.use(
    express.json(),
    peças,
    usuarios
  )
}
module.exports = routes;

