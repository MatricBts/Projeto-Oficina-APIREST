const database = require('../infra/db');
const fornecedor = require('../models/fornecedor.model');


const fornecedorControllers = {
  mostrarFornecedor: async function(res) {
    await database.sync();
    await Fornecedor.findAll()
      .then((fornecedor)=>{
          res.json(fornecedor)
      })
      .catch((error)=>{
          res.send(error)
      })
  },

  encontrarPorAtributos: async function(rdados, res) {
    await database.sync();
    await Fornecedor.findOne({where: rdados})
      .then((fornecedor)=>{
        !fornecedor? res.send('Fornecedor não encontrado') : res.json(fornecedor)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  cadastrar: async function(rfornecedor, res){
    await database.sync();
    await Fornecedor.create(rfornecedor)
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
    await Fornecedor.update(rnovosDados,{where: rdados})
      .then((qtdFornecedorEncontrados)=>{
        qtdFornecedorEncontrados < 1 ? res.send('Fornecedor não encontrado') : res.send(`${rdados.nome} foi atualizado com sucesso`)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  deletar: async function(rdados, res){
    await database.sync();
    await Fornecedor.destroy({where: rdados})
      .then((qtdFornecedorEncontrados)=>{
        qtdFornecedorEncontrados < 1 ? res.send('Fronecedor não encontrado') : res.send(`${rdados.nome} foi deletado com sucesso`)
      })
      .catch((error)=>{
          res.send(error)
      })
  },

  popularTabela: async function(res){
    await database.sync();
    await Fornecedor.bulkCreate([
      {nome: 'NHK', marca:'wega',pedido:'filtro', qtd: 40, vencimento:'21/05/2022'},
      {nome: 'Distribuidora RR', marca: 'nakata', pedido:'pivo', qtd: 20, vencimento: '09/05/2022'},
      {nome: 'NHK', marca: 'sabo', pedido:'junta do cabecote', qtd: 10, vencimento: '09/05/2022'},
      {nome: 'Tauros', marca: 'gonel', pedido:'reservatorio', qtd: 3, vencimento: '10/05/2022'},
      {nome: 'Distribuidora RR', marca: 'nakata', pedido:'terminal de direcao', vencimento: '09/05/2022'},
      {nome: 'BrLub Ltd.', marca: 'lubrificantes', pedido:'aditivo', qtd: 30, vencimento: '22/05/2022'},
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