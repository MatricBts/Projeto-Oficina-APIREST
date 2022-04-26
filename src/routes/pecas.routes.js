const express = require('express')
const router = express.Router();
const peçasControllers = require('../controllers/pecas.controllers')

router
    .get('/pecas', async (req,res) => {
      await peçasControllers.mostrarPeças(res);
    })
    .get('/pecas/atributos', async (req,res) => {
        const {body: dados} = req
        await peçasControllers.encontrarPorAtributos(dados, res);
    })
    .post('/pecas', async (req, res) => {
      peçasControllers.cadastrar(res);
    })
    .put('/pecas', async (req, res) => {
      const {body: {dados, dadosNovos}} = req;
      await peçasControllers.atualizar( dados, dadosNovos, res)
    })
    .delete('/pecas', (req, res) => {
      const {body: dados} = req
      peçasControllers.deletar(dados, res);
    })

module.exports = router;