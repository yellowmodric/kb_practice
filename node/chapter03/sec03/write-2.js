fs = require('fs');

const data = fs.readFileSync('./node/chapter03/sec03/example.txt', 'utf8');

//existsSync : 해당 경로에 파일이 있는지 bool 값으로 반환
if (fs.existsSync('./node/chapter03/sec03/text-1.txt')) {
  //파일이 이미 존재한다면 여기서 처리
  console.log('file already exist');
} else {
  //파일이 없다면 기록
  fs.writeFileSync('./node/chapter03/sec03/text-1.txt', data);
}
