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
          console.log(error)
      })
  },

    // encontrarPorNome: async function(rnome) {
    //     const peçaRetorno = [];
    //     await db.forEach(peça => {
    //         if(peça.nome === rnome){
    //             peçaRetorno.push(peça)
    //         }   
    //     })
    //     return peçaRetorno;
    // },

    // encontrarPorCategoria: async function(rcategoria){
    //     const peçasRetorno = [];
    //     await db.forEach(peça => {
    //         if(peça.categoria === rcategoria){
    //             peçasRetorno.push(peça)
    //         }   
    //     })
    //     return peçasRetorno;
    // },

    cadastrar: async function(res){
        await database.sync();
        await Pecas.create({
            nome: 'rocambole',
        })
        .then(()=>{
            res.send('cadastrado')
        })
        .catch((error)=>{
            console.log(error)
        })
    },

    // atualizar: async function(rnome, rmudanca){
    //     const atributosQueIraoMudar = Object.keys(rmudanca); // pega os atributos que irã ser atualizado
        
    //     db.forEach( peça => {
    //         if(peça.nome === rnome){ // filtra pelo nome da peça e quando achar inicia a mudança
    //             atributosQueIraoMudar.forEach( atributo => { 
    //                 peça[atributo] = rmudanca[atributo] // procura na peça atributos que irão ser mudadeo 
    //             })   
    //         }        
    //     })  
    // },

    deletar: async function(ratributos, res){
        await database.sync();
        await Pecas.destroy({where: ratributos})
        .then(()=>{
            res.send('deletado')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

module.exports = peçasControllers;