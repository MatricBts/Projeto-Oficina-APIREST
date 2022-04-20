const express = require('express')
const router = express.Router();
const db = require('./../../infra/db.js')

router
    .get('/pecas', (req,res) => {
        res.json(db)
    })
    .post('/pecas', (req, res) => res.send('post'))
    .put('/pecas', (req, res) => res.send('post'))
    .delete('/pecas', (req, res) => res.send('post'))

module.exports = router;