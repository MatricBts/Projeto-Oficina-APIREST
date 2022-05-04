const database = require('../infra/db')
const dbFuncionario = require('../models/Funcionarios.model')

const funcionarioCtrl = {
  mostrarFuncionario: async function (res) {
    await database.sync()
    await dbFuncionario
      .findAll()
      .then(funcionario => {
        res.json(funcionario)
      })
      .catch(error => {
        res.send(error)
      })
  },

  obterFuncionario: async function (id, res) {
    await database.sync()
    await dbFuncionario
      .findOne({ where: { id: id } })
      .then(funcionario => {
        !funcionario
          ? res.send('Funcionário não localizado. Tente de novo!')
          : res.json(funcionario)
      })
      .catch(error => {
        res.send(error)
      })
  },

  cadastrarFuncionario: async function (rFuncionario, res) {
    await database.sync()
    await dbFuncionario
      .create(rFuncionario)
      .then(() => {
        res.send('Funcionário cadastrado com sucesso!')
      })
      .catch(error => {
        res.send(error.errors[0].message)
      })
  },

  atualizarFuncionario: async function (id, novosDados, res) {
    await database.sync()
    await dbFuncionario
      .update(novosDados, { where: { id: id } })
      .then(() => {
        res.send(`Funcionário atualizado com sucesso`)
      })
      .catch(error => {
        res.send(error)
      })
  },

  deletar: async function (id, res) {
    await database.sync()
    await dbFuncionario
      .destroy({ where: { id: id } })
      .then(qtdFuncionarioEncontrados => {
        qtdFuncionarioEncontrados < 1
          ? res.send(`Funcionário não encontrado`)
          : res.send(`Funcionário deletado com sucesso`)
      })
      .catch(error => {
        res.send(error)
      })
  },

  //Função Popular Tabela
  popularTabela: async function (res) {
    await database.sync()
    await dbFuncionario
      .bulkCreate([
        {
          matricula: 0001,
          nome: 'João Pedro Mascarenhas',
          telefone: '(11) 99999-7777',
          admissão: '01/01/2022',
          nctps: '001.111/30',
          pis: '123456-789',
          cargo: 'Mecânico',
          salario: '3500,00',
          cpf: '123.456.789-10',
          rg: '01234567-98',
          estcivil: 'solteiro',
          nascimento: '01/01/1991',
          jornasdacontrat: '40h',
          endereco: 'Av. Getulio Vargas, 500',
          cep: '40.000-000',
          bairro: 'Quitandinha',
          email: 'JMascarenhas@yahoo.com'
        },
        {
          matricula: 0002,
          nome: 'Francisca Pedreira',
          telefone: '(11) 11111-8888',
          admissão: '01/02/2022',
          nctps: '002.234/12',
          pis: '97654-321',
          cargo: 'Gerente Administrativo',
          salario: '4500,00',
          cpf: '109.876.543-21',
          rg: '102345-69',
          estcivil: 'Casada',
          nascimento: '01/05/1984',
          jornasdacontrat: '36h',
          endereco: 'Av. Princesa Leopoldinha, 145-B',
          cep: '41.000-000',
          bairro: 'Casca Verbde',
          email: 'ChicaPedreira@hotmail.com'
        },
        {
          matricula: 0003,
          nome: 'Afonso Pena Santos',
          telefone: '(11) 22222-7777',
          admissão: '03/04/2021',
          nctps: '001.789/80',
          pis: '78123-456',
          cargo: 'Chefe Manutenção',
          salario: '2500,00',
          cpf: '987.789.754-00',
          rg: '698070-401',
          estcivil: 'Casado',
          nascimento: '01/007/1985',
          jornasdacontrat: '40h',
          endereco: 'Av. Marquês de Leão, 77A',
          cep: '42.000-000',
          bairro: 'Novo Horizonte',
          email: 'AfonsoPensa@hotmail.com'
        },

        {
          matricula: 0045,
          nome: 'Julitte Freire Santos',
          telefone: '(11) 33333-6666',
          admissão: '15/09/2015',
          nctps: '004.158/87',
          pis: '75481-8965',
          cargo: 'Coordenadora de Qualidade',
          salario: '9500,00',
          cpf: '111.222.333-45',
          rg: '1597533-401',
          estcivil: 'Casado',
          nascimento: '01/007/1985',
          jornasdacontrat: '40h',
          endereco: 'R. Alto da serra, 12C',
          cep: '43.000-000',
          bairro: 'Alto da Serra',
          email: 'JulietteFrSantos@hotmail.com'
        }
      ])
      .then(() => {
        res.send('tabela populada')
      })
      .catch(error => {
        res.send(error)
      })
  }
}

module.exports = funcionarioCtrl
