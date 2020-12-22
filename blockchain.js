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

    isValid(chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesisBlock())){
            return false
        }
        for(let i=1 ; i < chain.length; i++){
            const block = chain[i]
            const lastBlock = chain[i-1]
            if(block.lastHash !== lastBlock.hash){
                return false
            }
        }
        return true
    }

    replace(newChain){
        console.log(newChain.length)
        console.log( this.chain.length)
        if(newChain.length <= this.chain.length){
            console.log('new chain must be longer than current chain')
            return
        }
        if(!this.isValid(newChain)){
            console.log('new chain is valid')
            return
        }
        this.chain = newChain
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