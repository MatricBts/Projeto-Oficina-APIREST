const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('teste')
})

app.listen(4005, ()=> 'Rodando na porta 4005')