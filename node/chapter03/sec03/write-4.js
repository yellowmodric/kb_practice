const fs = require('fs');

let content = `
=================================
새로운 내용을 추가해 보겠습니다.
=================================
`;

//flag를 a로 변경해주면 기존 파일에 내용이 추가된다(append)
fs.writeFileSync('./node/chapter03/sec03/text-1.txt', content, { flag: 'a' });
