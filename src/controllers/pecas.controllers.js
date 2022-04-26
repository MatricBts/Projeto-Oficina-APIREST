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
  },

  popularTabela: async function(res){
    await database.sync();
    await Pecas.bulkCreate([
      {nome: 'filtro', preço: 20, categoria: 'revisão', quantidade: 40, marca: 'wega', garantia: 90},
      {nome: 'terminal direcao', preço: 45, categoria: 'suspensao', quantidade: 8, marca: 'nakata', garantia: 90},
      {nome: 'pivo', preço: 40, categoria: 'suspensao', quantidade: 20, marca: 'nakata', garantia: 90},
      {nome: 'junta do cabecote', preço: 60, categoria: 'motor', quantidade: 10, marca: 'sabo', garantia: 90},
      {nome: 'aditivo', preço: 25, categoria: 'arrefecimento', quantidade: 60, marca: 'paraflu', garantia: 90},
      {nome: 'reservatorio', preço: 55, categoria: 'arrefecimento', quantidade: 3, marca: 'gonel', garantia: 90}
    ])
      .then(()=>{
        res.send('tabela populada')
      })
      .catch((error)=>{
        res.send(error)
      })
  }

}

module.exports = peçasControllers;