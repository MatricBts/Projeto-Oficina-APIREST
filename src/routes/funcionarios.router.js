const express = require ('express');
const employeerCtrl = require('../controllers/funcionarios.controllers');
const router = express.Router (); 
const employeerCtrl = require ('../controllers/funcionarios.controllers')

router

//Rota para exibir funcionarios
.get ('/funcionario', async (req, res) =>{
  await employeerCtrl.listarfuncionario (res); 
})
//Rota para exibir funcionarios pelo I
.get ('/funcionario/:id', async (req, res) =>{
  const {body: dados} = req
  await employeerCtrl.listarFuncionarioID (dados, res); 
})

//Rota para inserir dados 
.post ('/funcionario', async (req, res) =>{
  const{body} = req
  employeerCtrl.adicionarFuncionario (body, res); 

})
//Rota para atualizar dados 
.put ('/funcionario/', async (req, res)=>{
  const { body: {dados, dadosNovos}} = req; 
  await employeerCtrl.atualizar (dados, dadosNovos, res)
})

//Rota para deletar dados 
.delete {} 