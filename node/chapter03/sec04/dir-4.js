fs = require('fs');

fs.rm('./node/chapter03/sec04/test2', { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('folder deleted');
});
