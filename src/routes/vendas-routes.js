const express = require('express')
const router = express.Router();
const vendasControllers = require('../controllers/vendas-controllers')

router
  .get('/vendas', async (req, res) => {
    await vendasControllers.mostrarVendas(res);
  })
  .get('/vendas/atributos', async (req, res) => {
    const { body: dados } = req
    await vendasControllers.encontrarPorAtributos(dados, res);
  })
  .post('/vendas', async (req, res) => {
    const { body } = req
    vendasControllers.cadastrar(body, res);
  })
  .post('/vendas/populate', async (req, res) => {
    await vendasControllers.popularTabela(res)
  })
  .put('/vendas', async (req, res) => {
    const { body: { dados, dadosNovos } } = req;
    await vendasControllers.atualizar(dados, dadosNovos, res)
  })
  .delete('/vendas', (req, res) => {
    const { body: dados } = req
    vendasControllers.deletar(dados, res);
  })

module.exports = router;