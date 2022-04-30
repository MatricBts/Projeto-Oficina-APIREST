const express = require('express')
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router
  .get('/usuarios', async (req,res) => {
    await usuarioController.mostrarUsuarios(res);
  })
  .get('/usuarios/atributos', async (req,res) => {
    const {body: dados} = req
    await usuarioController.encontrarPorAtributos(dados, res);
  })
  .post('/usuarios', async (req, res) => {
    const {body} = req
    usuarioController.cadastrar(body, res);
  })
  .post('/usuarios/populate', async (req, res)=>{
    await usuarioController.popularTabela(res)
  })
  .put('/usuarios', async (req, res) => {
    const {body: {dados, dadosNovos}} = req;
    await usuarioController.atualizar( dados, dadosNovos, res)
  })
  .delete('/usuarios', (req, res) => {
    const {body: dados} = req
    usuarioController.deletar(dados, res);
  })

module.exports = router;