const sha256 = require("crypto-js/sha256");

//class representing a block
module.exports = class block{
    
    //constructor to keep track of each property of a block
    constructor(index, timestamp, data, previousHash = '' ){
        this.index = index;
        this.timestamp = timestamp
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.computeHash();
     }

     //method that generates a hash for a given block
     computeHash(){
        return sha256(this.index + this.timestamp + 
            this.previousHash + JSON.stringify(this.data)).toString()
     }

}