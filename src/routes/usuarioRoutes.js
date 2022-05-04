const express = require('express')
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router
  .get('/usuarios', async (req,res) => {
    await usuarioController.mostrarUsuarios(res);
  })
  .get('/usuarios/:id', async (req,res) => {
    const {id} = req.params
    await usuarioController.obterUsuario(id, res);
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
  .delete('/usuarios/:id', (req, res) => {
    const {id} = req.params
    usuarioController.deletar(id, res);
  })

module.exports = router;