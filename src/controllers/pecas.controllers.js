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
        !peca ? res.send('Peça não encontrada') : res.json(peca)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  cadastrar: async function(rpeca, res){
    await database.sync();
    await Pecas.create(rpeca)
      .then(()=>{
        res.send('cadastrado')
      })
      .catch((error)=>{
        res.send(error.errors[0].message)
      })
  },

  atualizar: async function(rdados, rnovosDados, res){
    console.log(rdados)
    await database.sync();
    await Pecas.update(rnovosDados,{where: rdados})
      .then((qtdPecasEncontradas)=>{
        qtdPecasEncontradas < 1 ? res.send('Peça não encontrada') : res.send(`${rdados.nome} foi atualizado com sucesso`)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  deletar: async function(rdados, res){
    await database.sync();
    await Pecas.destroy({where: rdados})
      .then((qtdPecasEncontradas)=>{
        qtdPecasEncontradas < 1 ? res.send('Peça não encontrada') : res.send(`${rdados.nome} foi deletado com sucesso`)
      })
      .catch((error)=>{
          res.send(error)
      })
  }
}

module.exports = peçasControllers;