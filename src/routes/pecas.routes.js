const express = require('express')
const router = express.Router();
const pecasControllers = require('../controllers/pecas.controllers')

router
  .get('/pecas', async (req,res) => {
    await pecasControllers.mostrarPeças(res);
  })
  .get('/pecas/atributos', async (req,res) => {
    const {body: dados} = req
    await pecasControllers.encontrarPorAtributos(dados, res);
  })
  .post('/pecas', async (req, res) => {
    const {body} = req
    pecasControllers.cadastrar(body, res);
  })
  .post('/pecas/populate', async (req, res)=>{
    await pecasControllers.popularTabela(res)
  })
  .put('/pecas', async (req, res) => {
    const {body: {dados, dadosNovos}} = req;
    await pecasControllers.atualizar( dados, dadosNovos, res)
  })
  .delete('/pecas', (req, res) => {
    const {body: dados} = req
    pecasControllers.deletar(dados, res);
  })

module.exports = router;