const express = require('express')
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router
  .get('/usuarios', async (req,res) => {
    await usuarioController.mostrarUsuarios(req, res);
  })
  .get('/usuarios/:id', async (req,res) => {
    await usuarioController.obterUsuario(req, res);
  })
  .post('/usuarios', async (req, res) => {
    usuarioController.cadastrar(req, res);
  })
  .post('/usuarios/populate', async (req, res)=>{
    await usuarioController.popularTabela(req, res)
  })
  .put('/usuarios/:id', async (req, res) => {
    await usuarioController.atualizar(req, res)
  })
  .delete('/usuarios/:id', (req, res) => {
    usuarioController.deletar(req, res);
  })

module.exports = router;