const fs = require('fs');
const rs = fs.createReadStream('./node/chapter03/sec05/example.txt');

rs.on('data', (chunk) => {
  console.log('new chunk received:');
  console.log(chunk.length, chunk);
})
  .on('end', () => {
    console.log('finished reading data');
  })
  .on('error', (err) => {
    console.error(`Error reading the file: ${err}`);
  });
