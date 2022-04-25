
const express = require('express')
const routes = require('./src/app')

const app = express();
app.use(express.json());

routes(app);

app.listen(4005, () => console.log('Rodando em: http://localhost:4005'))