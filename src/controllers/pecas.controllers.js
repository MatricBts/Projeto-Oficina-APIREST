const database = require('../infra/db')
const Pecas = require('../models/Pecas.model')



const peçasControllers = {
    mostrarPeças: async function() {
        await database.sync()
        pecas = await Pecas.findAll()
        return pecas;
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

    cadastrar: async function(){
        await database.sync()
        await Pecas.create({
            nome: 'rocambole',
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

    // delete: async function(ratributos){
    //     const atributosParaExclusao = Object.keys(ratributos) // ARRAY COM INFORÇÕES DO FILTRO POR ATRIBUTO
    //     let pecaAtendeRequisitos = 0  // CONTADOR PARA SABER SE TODOS OS ATRIBUTOS ATENDEM A O FILTRO

    //     db.forEach( peça => { // FOR PELO DB
    //         atributosParaExclusao.forEach( (atributo, index) => { // FOR PELO ATRIBUTO
    //             if(ratributos[atributo] === peça[atributo]){
    //                 ++pecaAtendeRequisitos
                    
    //                 if(pecaAtendeRequisitos === atributosParaExclusao.length){ // SE ATENDER A O REQUISITO FAZ A EXCLUSÃO
    //                     const index = db.findIndex( peças => peças === peça)
    //                     db.splice(index, 1)
    //                 }
    //             }
    //         })
    //     })
    // }
}

module.exports = peçasControllers;