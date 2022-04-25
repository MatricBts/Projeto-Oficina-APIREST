const express = require('express')
const router = express.Router();
const peçasControllers = require('../controllers/pecas.controllers')


router
    .get('/pecas', async (req,res) => {
      await peçasControllers.mostrarPeças(res);
    })
    // .get('/pecas/nomeco', async (req,res) => {
    //     const {body: nome} = req
    //     const peça = await peçasControllers.encontrarPorNome(nome.nome);
    //     res.json(peça)
    // })
    // .get('/pecas/categoria', async (req,res) => {
    //     const {body: categoria} = req
    //     const peças = await peçasControllers.encontrarPorCategoria(categoria.categoria);
    //     res.json(peças)
    // })
    .post('/pecas', async (req, res) => {
      peçasControllers.cadastrar(res);
    })
    // .put('/pecas', (req, res) => {
    //     const {body: {nome, mudanca}} = req;
    //     peçasControllers.atualizar( nome, mudanca )
    //     res.send('atualizado')
    // })
    .delete('/pecas', (req, res) => {
      const {body: exclusao} = req
      peçasControllers.deletar(exclusao, res);
    })

module.exports = router;