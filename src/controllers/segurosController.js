const database = require('../infra/db')
const Seguros = require('../models/SegurosModel')

const segurosController = {
  mostrarSeguros: async function(res) {
    await database.sync();
    await Seguros.findAll()
      .then((seguros)=>{
          res.json(seguros)
      })
      .catch((error)=>{
          res.send(error)
      })
  },

  obterSeguros: async function(id, res) {
    await database.sync();
    await Seguros.fi
    await Seguros.findOne({where: {id: id}})
      .then((seguros)=>{
        !seguros ? res.send('Seguradora não encontrada') : res.json(seguros)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  cadastrar: async function(rSeguros, res){
    await database.sync();
    await Seguros.create(rSeguros)
      .then(()=>{
        res.send('Seguradora cadastrada!')
      })
      .catch((error)=>{
        res.send(error.errors[0].message)
      })
  },

  atualizar: async function(rDados, rNovosDados, res){
    console.log(rDados)
    await database.sync();
    await Usuario.update(rNovosDados,{where: rDados})
      .then((qtdSegurosEncontrados)=>{
        qtdSegurosEncontrados < 1 ? res.send('Seguradora não encontrada') : res.send(`Foi atualizado com sucesso`)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  deletar: async function(id, res){
    await database.sync();
    await Seguros.destroy({where: {id: id}})
      .then((qtdSegurosEncontrados)=>{
        qtdSegurosEncontrados < 1 ? res.send('Seguradora não encontrada') : res.send(`Foi deletado com sucesso`)
      })
      .catch((error)=>{
          res.send(error)
      })
  },

  popularTabela: async function(res){
    await database.sync();
    await Seguros.bulkCreate([
      {nome: 'Aliança Seguros', email: 'aliançaseguros@contato.com'},
      {nome: 'Solução Seguros', email: 'solucaoseguros@contato.com'},
      {nome: 'Porto Seguros', email: 'portoseguros@contato.com'},
      {nome: 'Banco Internacional Seguros', email: 'biseguros@contato.com'},
      {nome: 'Rio Seguros', email: 'rioseguros@contato.com'},
      {nome: 'Newcar Seguros', email: 'ncseguros@contato.com'}
    ])
      .then(()=>{
        res.send('Tabela populada')
      })
      .catch((error)=>{
        res.send(error)
      })
  }

}

module.exports = segurosController;