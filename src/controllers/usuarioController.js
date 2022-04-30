const database = require('../infra/db')
const Usuario = require('../models/UsuarioModel')

const usuarioController = {
  mostrarUsuarios: async function(res) {
    await database.sync();
    await Usuario.findAll()
      .then((usuarios)=>{
          res.json(usuarios)
      })
      .catch((error)=>{
          res.send(error)
      })
  },

  obterUsuario: async function(id, res) {
    await database.sync();
    await Usuario.fi
    await Usuario.findOne({where: {id: id}})
      .then((usuario)=>{
        !usuario ? res.send('Usuário não encontrado') : res.json(usuario)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  cadastrar: async function(rUsuario, res){
    await database.sync();
    await Usuario.create(rUsuario)
      .then(()=>{
        res.send('Usuário cadastrado!')
      })
      .catch((error)=>{
        res.send(error.errors[0].message)
      })
  },

  atualizar: async function(rDados, rNovosDados, res){
    console.log(rDados)
    await database.sync();
    await Usuario.update(rNovosDados,{where: rDados})
      .then((qtdUsuariosEncontrados)=>{
        qtdUsuariosEncontrados < 1 ? res.send('Usuario não encontrado') : res.send(`Foi atualizado com sucesso`)
      })
      .catch((error)=>{
        res.send(error)
      })
  },

  deletar: async function(id, res){
    await database.sync();
    await Usuario.destroy({where: {id: id}})
      .then((qtdUsuariosEncontrados)=>{
        qtdUsuariosEncontrados < 1 ? res.send('Usuário não encontrado') : res.send(`Foi deletado com sucesso`)
      })
      .catch((error)=>{
          res.send(error)
      })
  },

  popularTabela: async function(res){
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