const request = require('supertest')
const ApiUrl = 'http://localhost:4005'

describe( 'ApiUrl', ()=>{
  test('Testando GET /PEÇAS', ()=>{
    return request(ApiUrl).get('/pecas')
      .then((response) =>{
        expect(response.statusCode).toBe(200)
      })
  })
})

describe( 'ApiUrl', ()=>{
  test('Testando GET PEÇAS/ATRIBUTOS', async ()=>{
    return await request(ApiUrl).get('/pecas/atributos')
      .then((response) =>{
        expect(response.statusCode).toBe(200)
      })
  })
})

describe( 'ApiUrl', ()=>{
  test('Testando POST /PEÇAS', ()=>{
    return request(ApiUrl).post('/pecas')
      .then((response) =>{
        expect(response.statusCode).toBe(200)
      })
  })
})

describe( 'ApiUrl', ()=>{
  test('Testando POST /PECAS/POPULATE', ()=>{
    return request(ApiUrl).post('/pecas/populate')
      .then((response) =>{
        expect(response.statusCode).toBe(200)
      })
  })
})

describe( 'ApiUrl', ()=>{
  test('Testando PUT /PECAS', ()=>{
    return request(ApiUrl).put('/pecas')
      .then((response) =>{
        expect(response.statusCode).toBe(200)
      })
  })
})

describe( 'ApiUrl', ()=>{
  test('Testando DELETE /PECAS', ()=>{
    return request(ApiUrl).delete('/pecas')
      .then((response) =>{
        expect(response.statusCode).toBe(200)
      })
  })
})