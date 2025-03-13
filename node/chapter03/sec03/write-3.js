fs = require('fs');

fs.readFile('./node/chapter03/sec03/example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  fs.writeFile('./node/chapter03/sec03/text-2.txt', data, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('text-2.txt is saved!');
  });
});
