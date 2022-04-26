const res = require('express/lib/response');
const database = require('../infra/db')
const Pecas = require('../models/Pecas.model')

const peçasControllers = {
  mostrarPeças: async function(res) {
    await database.sync();
    await Pecas.findAll()
      .then((pecas)=>{
          res.json(pecas)
      })
      .catch((error)=>{
          res.send(error)
      })
  },

  encontrarPorAtributos: async function(rdados, res) {
    await database.sync();
    await Pecas.findOne({where: rdados})
      .then((peca)=>{
        res.json(peca)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  cadastrar: async function(res){
    await database.sync();
    await Pecas.create({
      nome: 'rocambole',
    })
      .then(()=>{
        res.send('cadastrado')
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  atualizar: async function(rdados, rnovosDados, res){
    console.log(rdados)
    await database.sync();
    await Pecas.update(rnovosDados,{where: rdados})
      .then(()=>{
        res.send('atualizado')
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  deletar: async function(rdados, res){
    await database.sync();
    await Pecas.destroy({where: rdados})
      .then(()=>{
          res.send('deletado')
      })
      .catch((error)=>{
          res.send(error)
      })
  }
}

module.exports = peçasControllers;