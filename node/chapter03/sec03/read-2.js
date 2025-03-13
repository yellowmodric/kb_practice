fs = require('fs');

const data = fs.readFileSync('./node/chapter03/sec03/example.txt', 'utf8');
console.log(data);
