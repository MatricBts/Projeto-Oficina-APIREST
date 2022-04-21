const db = require('./../../infra/db.js')

const peçasControllers = {
    mostrarPeças: async function() {
        return await db;
    },
    
    encontrarPorNome: async function(rnome) {
        const peçaRetorno = [];
        await db.forEach(peça => {
            if(peça.nome === rnome){
                peçaRetorno.push(peça)
            }   
        })
        return peçaRetorno;
    },

    encontrarPorCategoria: async function(rcategoria){
        const peçasRetorno = [];
        await db.forEach(peça => {
            if(peça.categoria === rcategoria){
                peçasRetorno.push(peça)
            }   
        })
        return peçasRetorno;
    },

    cadastrar: async function(rpeça){
        await db.push(rpeça)
    },

    atualizar: async function(rnome, rmudanca){
        db.forEach( peça => {
            if(peça.nome === rnome){
                Object.keys(peça).forEach( chaves => {
                    if(chaves == Object.keys(rmudanca)[0]){
                        peça[chaves] = rmudanca[Object.keys(rmudanca)[0]]
                    }
                })
            }
        })

        
    }
}

module.exports = peçasControllers;