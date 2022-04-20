const express = require('express')
const routes = require('./teste')

const app = express();
app.use(express.json());

routes(app);

app.listen(4005, () => 'Rodando na porta 4005')