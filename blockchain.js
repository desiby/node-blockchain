const block = require("./block.js");



module.exports = class blockchain {
    constructor(){
        this.chain = [this.genesisBlock()];
    }

    genesisBlock(){
        return new block(0, "1/1/2018", "genesis block", "0");
    }

    getLastBlock(){
       return this.chain[this.chain.length - 1];
    }

    addBlock(aBlock){
        aBlock.previousHash = this.getLastBlock().hash
        aBlock.hash = aBlock.computeHash();
        this.chain.push(aBlock);
    }
}