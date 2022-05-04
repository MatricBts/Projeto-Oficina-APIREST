const database = require('../infra/db')
const Usuario = require('../models/UsuarioModel')


const usuarioController = {
  mostrarUsuarios: async function(req, res) {
    await database.sync();
    await Usuario.findAll()
      .then((usuarios)=>{
          res.json(usuarios)
      })
      .catch((error)=>{
          res.send(error)
      })
  },

  obterUsuario: async function(req, res) {
    const {id} = req.params
    await database.sync();
    await Usuario.findOne({where: {id: id}})
      .then((usuario)=>{
        !usuario ? res.send('Usuário não encontrado') : res.json(usuario)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  cadastrar: async function(req, res){
    const novoUsuario = req.body
    await database.sync();
    await Usuario.create(novoUsuario)
      .then(()=>{
        res.send('Usuário cadastrado!')
      })
      .catch((error)=>{
        res.send(error.errors[0].message)
      })
  },

  atualizar: async function(req, res){
    const {id} = req.params
    const novosDados = req.body
    await database.sync();
    await Usuario.update(novosDados,{where: {id:id}})
      .then(() => {
        res.send('Usuário atualizado com sucesso.')
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  deletar: async function(req, res){
    const {id} = req.params
    await database.sync();
    await Usuario.destroy({where: {id: id}})
      .then(() => {
        res.send('Usuário destruido com sucesso.')
      })
      .catch((error)=>{
          res.send(error)
      })
  },

  popularTabela: async function(req, res){
    await database.sync();
    await Usuario.bulkCreate([
      {nome: 'Valdery', endereco: "Rua Paraiba, 120", cidade: 'Imperatriz', estado: "MA", email: 'valdery@gmail.com'},
      {nome: 'Matric', endereco: "Rua Gonçalves Dias, 505", cidade: 'Salvador', estado: "BA", email: 'matric@gmail.com'},
      {nome: 'Nando', endereco: "Rua Rui Barbosa, 66", cidade: 'Fortaleza', estado: "CE", email: 'nando@gmail.com'},
      {nome: 'Raquel', endereco: "Av. Bernardo Sayão, 123", cidade: 'São Paulo', estado: "SP", email: 'raquel@gmail.com'},
      {nome: 'Thereza', endereco: "Rua Godofredo Viana, 1010", cidade: 'Feira de Santana', estado: "BA", email: 'thereza@gmail.com'},
      {nome: 'Kassiane', endereco: "Av. Liberdade, 158", cidade: 'João Pessoa', estado: "PB", email: 'kassiane@gmail.com'}
    ])
      .then(()=>{
        res.send('Tabela populada')
      })
      .catch((error)=>{
        res.send(error)
      })
  }

}

module.exports = usuarioController;