
const express = require('express')
const routes = require('./src/app')
const cors = require('cors')
var port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors())

routes(app);

app.listen(port, () => console.log(`Rodando em: http://localhost:${port}`))