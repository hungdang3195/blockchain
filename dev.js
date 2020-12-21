const Block = require('./block')
const BlockChain = require('./blockchain')

const bc = new BlockChain()
const newBlock = bc.mineBlockData('lesson1')
