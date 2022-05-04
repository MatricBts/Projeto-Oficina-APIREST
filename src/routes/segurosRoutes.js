const express = require('express')
const router = express.Router();
const segurosController = require('../controllers/segurosController')

router
  .get('/Seguros', async (req,res) => {
    await segurosController.mostrarUsuarios(res);
  })
  .get('/Seguros/:id', async (req,res) => {
    const {id} = req.params
    await segurosController.mostrarSeguros(id, res);
  })
  .post('/Seguros', async (req, res) => {
    const {body} = req
    segurosController.cadastrar(body, res);
  })
  .post('/Seguros/populate', async (req, res)=>{
    await segurosController.popularTabela(res)
  })
  .put('/Seguros', async (req, res) => {
    const {body: {dados, dadosNovos}} = req;
    await segurosController.atualizar( dados, dadosNovos, res)
  })
  .delete('/Seguros/:id', (req, res) => {
    const {id} = req.params
    segurosController.deletar(id, res);
  })

module.exports = router;