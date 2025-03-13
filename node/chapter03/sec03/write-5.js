const fs = require('fs');

//appendFile : 비동기로 기존 파일 내용에 새로운 내용을 추가
fs.appendFile(
  './node/chapter03/sec03/text-2.txt',
  '\n\n 새로운 내용 추가',
  (err) => {
    if (err) {
      console.error(err);
    }
    console.log('appending to file');
  }
);
