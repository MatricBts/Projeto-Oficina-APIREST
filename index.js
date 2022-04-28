
const express = require('express')
const routes = require('./src/app')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

routes(app);

app.listen(4005, () => console.log('Rodando em: http://localhost:4005'))