const fs = require('fs');

fs.readdir('./', (err, files) => {
  //예외가 발생할 경우 출력해주고 리턴
  if (err) {
    console.error(err);
    return;
  }
  console.log(files);
});
