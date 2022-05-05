const express = require("express");
const peças = require('./routes/pecas.routes')

const fornecedor = require('./routes/fornecedor.routes')
const vendas = require('./routes/vendas-routes')
const usuarios = require("./routes/usuarioRoutes")
const funcionario = require ("./routes/funcionario.routes")
const seguros = require("./routes/segurosRoutes")

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send('Projeto Resilia Modulo 4 - API REST Oficina Mecânica')
  })

  app.use(
    express.json(),
    peças,
    fornecedor,
    vendas,
    usuarios, 
    funcionario,
    usuarios,
    seguros
  )
}
module.exports = routes;

