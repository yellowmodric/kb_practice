const path = require('path');
const fs = require('fs');

//파일 경로 설정
const filePath = path.join('node', '실습', 'members', 'kim_jong_kook.txt');

const content = '김종국, 나이: 45, 체중: 80kg, 운동: 벤치프레스 100kg';

fs.writeFileSync(filePath, content, 'utf8');

console.log(`파일 생성 완료!`);

//디렉토리 경로
console.log(`디렉터리 경로: ${__dirname}`);

//파일 이름
const fn = path.basename(filePath);
console.log(`파일 이름: ${fn}`);

//확장자
const ext = path.extname(filePath);
console.log(`파일 확장자: ${ext}`);

//파일 이름(확장자 제외)
console.log(`파일 이름(확장자 제외): ${path.basename(filePath, ext)}`);
