fs = require('fs');

if (fs.existsSync('./node/chapter03/sec04/test')) {
  //삭제할 디렉토리가 있다면
  //rmdir : 빈 폴더가 있는지 체크
  fs.rmdir('./node/chapter03/sec04/test', (err) => {
    if (err) return console.error(err);
    console.log('folder deleted');
  });
} else {
  //mkdir : 해당 경로의 폴더를 비동기적으로 생성
  console.log('folder does not exist');
}
