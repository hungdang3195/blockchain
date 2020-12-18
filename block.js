const BLOCKTYPE = 1000
class Block {

    constructor(timespan, lastHash, hash , data , nonce , difficulty){
        this.timespan = timespan
        this.lastHash = lastHash
        this.hash = hash
        this.difficulty = difficulty
        this.data = data 
    }
    static genesisBlock(){
        return new Block('genesis-time','','','',0,1)
    }
    toString(){
        return `Block 
         timespan: ${this.timespan}
         lastHash: ${this.lastHash}
         hash: ${this.hash}
         data: ${this.data}
        `
    }
    
}

module.exports = Block;