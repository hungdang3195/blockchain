const Block = require("./block")

class BlockChain {

    constructor(){
        this.chain = [Block.genesisBlock()]
    }

    addBlock(data){
        const lastBlock = this.chain[this.chain.length -1]
        const block = new Block(Date.now(),lastBlock.hash, data)
        return block
    }
}

module.exports = BlockChain