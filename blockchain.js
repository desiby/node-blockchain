const block = require("./block.js");

//Class representing a blockchain
module.exports = class blockchain {
    
    //initializing a genesis block
    constructor(){
        this.chain = [this.genesisBlock()];
    }

    //method defining a genesis block
    genesisBlock(){
        return new block(0, "1/1/2018", "genesis block", "0");
    }

    //method defining the latest block in the chain
    getLastBlock(){
       return this.chain[this.chain.length - 1];
    }

    //add a block in the chain
    addBlock(aBlock){
        aBlock.previousHash = this.getLastBlock().hash
        aBlock.hash = aBlock.computeHash();
        this.chain.push(aBlock);
    }
}