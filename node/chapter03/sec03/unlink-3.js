const fs = require('fs');

//해당 경로에 파일이 없는지 체크
if (!fs.existsSync('./node/chapter03/sec03/text-2.txt')) {
  console.log('file does not exist');
} else {
  fs.unlinkSync('./node/chapter03/sec03/text-2.txt', (err) => {
    return console.error(err);
  });
  console.log('file deleted');
}
