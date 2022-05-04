const express = require('express')
const router = express.Router();
const fornecedorControllers = require('../controllers/fornecedor.controllers')


router
  .get('/fornecedor', async (req,res) => {
    await fornecedorControllers.mostrarFornecedor(res);
  })
  .get('/fornecedor/atributos', async (req,res) => {
    const {body: dados} = req
    await fornecedorControllers.encontrarPorAtributos(dados, res);
  })
  .post('/fornecedor', async (req, res) => {
    const {body} = req
    fornecedorControllers.cadastrar(body, res);
  })
  .post('/fornecedor/populate', async (req, res)=>{
    await fornecedorControllers.popularTabela(res)
  })
  .put('/fornecedor', async (req, res) => {
    const {body: {dados, dadosNovos}} = req;
    await fornecedorControllers.atualizar( dados, dadosNovos, res)
  })
  .delete('/fornecedor', (req, res) => {
    const {body: dados} = req
    fornecedorControllers.deletar(dados, res);
  })

module.exports = router;