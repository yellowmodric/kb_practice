const fs = require('fs');

if (!fs.existsSync('./node/chapter03/sec03/text-1.txt')) {
  console.log('file does not exist');
} else {
  fs.unlinkSync('./node/chapter03/sec03/text-1.txt');
  console.log('file deleted');
}
