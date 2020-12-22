const express = require('express')
const bodyParser = require('body-parser')
const BlockChain = require('./blockchain')
const HTTP_PORT = process.env.HTTP_PORT || 3001
const p2pserver = require('./p2pserver')
const app = express()

const bc = new BlockChain()
const p2p = new p2pserver(bc)
app.get('/blocks', (req, res) => {
    res.json(bc.chain)
})

app.post('/mine', (req, res) => {
    const data = req.body.data
    bc.mineBlockData(data)
    res.json(bc.chain)
})
app.listen(HTTP_PORT, () => {
    console.log(HTTP_PORT)
})
p2p.listen()