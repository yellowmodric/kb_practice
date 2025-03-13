const fs = require('fs');
const rs = fs.createReadStream('./node/chapter03/sec05/example.txt');
const ws = fs.createWriteStream('./node/chapter03/sec05/writMe.txt');

//pipe를 이용하면 여러개의 스트림을 이어서 처리 가능
rs.pipe(ws);
