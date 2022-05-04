const database = require('../infra/db')
const Vendas = require('../models/vendas-model')

const vendasControllers = {
  mostrarVendas: async function (res) {
    await database.sync();
    await Vendas.findAll()
      .then((vendas) => {
        res.json(pecas)
      })
      .catch((error) => {
        res.send(error)
      })
  },

  encontrarPorAtributos: async function (rdados, res) {
    await database.sync();
    await Vendas.findOne({ where: rdados })
      .then((vendas) => {
        !vendas ? res.send('venda não encontrada') : res.json(vendas)
      })
      .catch((error) => {
        res.send(error)
      })
  },

  cadastrar: async function (rvendas, res) {
    await database.sync();
    await Vendas.create(rvendas)
      .then(() => {
        res.send('cadastrado')
      })
      .catch((error) => {
        res.send(error.errors[0].message)
      })
  },

  atualizar: async function (rdados, rnovosDados, res) {
    console.log(rdados)
    await database.sync();
    await Vendas.update(rnovosDados, { where: rdados })
      .then((qtdVendasEncontradas) => {
        qtdVendasEncontradas < 1 ? res.send('Venda não encontrada') : res.send(`${rdados.nome} foi atualizado com sucesso`)
      })
      .catch((error) => {
        res.send(error)
      })
  },

  deletar: async function (rdados, res) {
    await database.sync();
    await Vendas.destroy({ where: rdados })
      .then((qtdVendasEncontradas) => {
        qtdVendasEncontradas < 1 ? res.send('Venda não encontrada') : res.send(`${rdados.nome} foi deletado com sucesso`)
      })
      .catch((error) => {
        res.send(error)
      })
  },

  popularTabela: async function (res) {
    await database.sync();
    await Vendas.bulkCreate([
      { nome: 'filtro', preço: 20, data: '23-10-2021' },
      { nome: 'terminal direcao', preço: 45, data: '21-08-2021' },
      { nome: 'terminal direcao', preço: 45, data: '02-04-2021' },
      { nome: 'terminal direcao', preço: 45, data: '02-03-2022' },
      { nome: 'terminal direcao', preço: 45, data: '23-06-2022' },
      { nome: 'terminal direcao', preço: 45, data: '05-09-2022' },
      { nome: 'terminal direcao', preço: 45, data: '18-11-2022' },

    ])
      .then(() => {
        res.send('tabela populada')
      })
      .catch((error) => {
        res.send(error)
      })
  }

}

module.exports = vendasControllers;