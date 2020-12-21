const Block = require("./block");

class BlockChain {
    constructor() {
        this.chain = [Block.genesisBlock()]
    }

    addBlock(data) {
        const lastBlock = this.getLatestBlock()
        const block = new Block(Date.now(), lastBlock.hash, data)
        this.chain.push(block)
        return block
    }

    mineBlockData(data) {
        const lastBlock = this.getLatestBlock()
        const block = Block.mineBlock(lastBlock, data)
        this.chain.push(block)
        return block
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    toString() {
        return `Blockchain
            ${this.chain.map(t => t.toString()).join('\r\n')}
        `
    }

}
module.exports = BlockChain;