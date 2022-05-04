const express = require('express')
const router = express.Router();
const funcionarioController = require('../controllers/funcionario.controllers')

router
  .get('/funcionario', async (req,res) => {
    await funcionarioController.mostrarFuncionario(res);
  })
  .get('/funcionario/:id', async (req,res) => {
    const {id} = req.params
    await funcionarioController.obterFuncionario(id, res);
  })
  .post('/funcionario', async (req, res) => {
    const {body} = req
    funcionarioController.cadastrarFuncionario(body, res);
  })
  .post('/funcionario/populate', async (req, res)=>{
    await funcionarioController.popularTabela(res)
  })
  .put('/funcionario/:id', async (req, res) => {
    const id = req.params.id
    const novosDados = req.body 
    await funcionarioController.atualizar( id, novosDados, res)
  })
  .delete('/funcionario/:id', (req, res) => {
    const {id} = req.params
    funcionarioController.deletar(id, res);
  })

module.exports = router;