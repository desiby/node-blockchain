const blockchain = require("./blockchain.js");
const block = require("./block.js");

let desicoin = new blockchain();

desicoin.addBlock(new block(1, "2/2/2018",{amount: 5}));
desicoin.addBlock(new block(2, "2/4/2018",{amount: 5}));

console.log(JSON.stringify(desicoin ,null, 4));