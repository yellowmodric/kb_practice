fs = require('fs');

if (fs.existsSync('./node/chapter03/sec04/test2/test3/test4')) {
  //해당 폴더가 있으면 실행
  console.log('folder already exists');
} else {
  //mkdir : 해당 경로의 폴더를 비동기적으로 생성
  fs.mkdir(
    './node/chapter03/sec04/test2/test3/test4',
    //recursive 옵션은 사용하면 중간 경로에 있는 폴더까지 생성 가능
    { recursive: true },
    (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('folder created');
    }
  );
}
