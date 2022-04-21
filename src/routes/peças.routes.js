const express = require('express')
const router = express.Router();
const peçasControllers = require('./../controllers/peças.controllers.js')

router
    .get('/pecas', async (req,res) => {
        const peças = await peçasControllers.mostrarPeças();
        res.json(peças)
    })
    .get('/pecas/nome/', async (req,res) => {
        const {body: nome} = req
        const peça = await peçasControllers.encontrarPorNome(nome.nome);
        res.json(peça)
    })
    .get('/pecas/categoria/', async (req,res) => {
        const {body: categoria} = req
        const peças = await peçasControllers.encontrarPorCategoria(categoria.categoria);
        res.json(peças)
    })
    .post('/cadastro/pecas', (req, res) => {
        peçasControllers.cadastrar(req.body)
        res.send('cadastrado')
    })
    .put('/atualizar/pecas', (req, res) => {
        const {body: {nome, mudanca}} = req;
        peçasControllers.atualizar( nome, mudanca )
        res.send('atualizado')
    })
    .delete('/pecas', (req, res) => {
        peçasControllers.delete()
        res.send('deletado')
    })

module.exports = router;