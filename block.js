const sha256 = require("crypto-js/sha256");

module.exports = class block{
     
    constructor(index, timestamp, data, previousHash = '' ){
        this.index = index;
        this.timestamp = timestamp
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.computeHash();
     }

     computeHash(){
        return sha256(this.index + this.timestamp + 
            this.previousHash + JSON.stringify(this.data)).toString()
     }

}