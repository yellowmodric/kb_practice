const path = require('path');
const fs = require('fs');

// console.log(`운동 기록 출력 완료!`);
// //파일 읽어오기
// const data = fs.readFile(
//   './node/실습/logs/workout_log.txt',
//   'utf8',
//   (err, data) => {
//     if (err) {
//       console.error(`운동 기록 파일이 없습니다.`);
//     }
//     console.log(data);
//   }
// );

// if (fs.existsSync('./node/실습/logs/members.txt')) {
//   fs.appendFile(
//     './node/실습/logs/members.txt',
//     '\n이승기: 체중 68kg, 벤치프레스 80kg',
//     (err) => {
//       if (err) {
//         console.error(err);
//       }
//       console.log('회원 정보가 성공적으로 추가되었습니다.');
//     }
//   );
// } else {
//   console.log(`회원 정보 파일이 없습니다.`);
// }

// const rs = fs.createReadStream('./node/실습/logs/workout_log.txt', 'utf8');
// const ws = fs.createWriteStream('./node/실습/logs/backup_log.txt');

// if (fs.existsSync('./node/실습/logs/workout_log.txt')) {
//   rs.pipe(ws);
//   console.log('백업이 완료되었습니다.');
// } else {
//   console.error(`백업 중 오류가 발생했습니다. ${err}`);
// }

async function workout() {
  console.log('운동 기록 처리 시작');
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('스트레칭 완료');
      resolve();
    }, 1000);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('러닝머신 완료');
      resolve();
    }, 500);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('단백질 보충 완료');
      resolve();
    }, 0);
  });

  console.log('운동 기록 처리 종료');
}

//workout();

async function checkin() {
  let today = new Date();
  let name = '이승기';
  const newContent = `이승기: 출석 완료 (${
    today.getFullYear() +
    '-' +
    (today.getMonth() + 1) +
    '-' +
    today.getDate() +
    ' ' +
    today.getHours() +
    ':' +
    today.getMinutes()
  })`;

  const existContent = await fs.promises.readFile(
    './node/실습/logs/checkin.txt',
    'utf8',
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('출석 중...');
      }
    }
  );
  if (existContent.includes(name)) {
    console.log(`이승기 회원님은 이미 출석하셨습니다!`);
  } else {
    await new Promise((resolve) => {
      setTimeout(async () => {
        await fs.promises.appendFile(
          './node/실습/logs/checkin.txt',
          `\n${newContent}`
        );
        console.log(newContent);
        console.log('출석 기록이 파일에 저장되었습니다!');
        resolve();
      }, 1000);
    });
  }
}

//checkin();

async function reserve() {
  console.log('예약 처리 중...');
  const name = '이승기';
  const newContent = '이승기: 스피닝';

  const existName = await fs.promises.readFile(
    './node/실습/logs/reservation.txt',
    'utf8',
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

  if (existName.includes(name)) {
    console.log('이승기 회원님은 이미 예약되어 있습니다.');
  } else {
    await new Promise((resolve) => {
      setTimeout(() => {
        fs.promises.appendFile(
          './node/실습/logs/reservation.txt',
          `\n${newContent}`
        );
        console.log('이승기 회원님의 스피닝 예약이 완료되었습니다.');
        console.log('예약 기록이 파일에 저장되었습니다.');
        resolve();
      }, 2000);
    });
  }
}

//reserve();

async function diet() {
  let kcal = 550;

  if (!fs.existsSync('./node/실습/logs/diet.txt')) {
    console.log('식단 기록 파일이 어디로 갔죠?!');
  } else {
    console.log('식단 기록 중...(오늘도 건강한 한 끼!)');
    await new Promise((resolve) => {
      setTimeout(() => {
        fs.appendFile(
          './node/실습/logs/diet.txt',
          `\n이승기: ${kcal}kcal, 조금 과했어요! 내일은 가볍게 가볼까요?`,
          (err) => {
            if (err) {
              console.error(err);
            }
            console.log('이승기 회원님, 오늘도 건강한 한 끼 감사합니다!');
            if (kcal >= 500) {
              console.log(
                '이승기 회원님, 오늘 뭐 드셨어요? 칼로리 폭탄인가요?'
              );
              fs.promises.appendFile(
                './node/실습/logs/diet.txt',
                '\n이승기 회원님, 오늘 뭐 드셨어요? 칼로리 폭탄인가요?'
              );
            }
            console.log('식단 기록이 맛있게 저장되었습니다!');
          }
        );
        resolve();
      }, 1000);
    });
  }
}

//diet();

async function routine() {
    const name = ['이승기', '김종국', '유재석'];
    const upBody = ['벤치프레스 3세트', '어깨프레스 3세트', '팔굽혀펴기 50개'];
    const downBody = ['스쿼트 5세트', '런지 3세트', '레그프레스 4세트'];   
    const randomWorkout = Math.floor(Math.random() * 3); 

    if (!fs.existsSync('./node/실습/logs/memberRoutine.txt')) {
        console.log('회원 루틴 파일이 없습니다!' || '운동 루틴 기록 파일이 없습니다!');
    }
    else {
        const existFile = await fs.promises.readFile('./node/실습/logs/memberRoutine.txt', 'utf8', (err) => {
            if (err) {
                console.error(err);
            }
        })
        for (p of name) {
            if (existFile.includes(name[p])) {
                console.log(`${p} 회원님은 이미 추천을 받으셨습니다!`);
            }
            else {
                if (existFile.includes('상체') {
                    await new Promise((resolve) => {
                        setTimeout(() => {
                            fs.promises.appendFile('./node/실습/logs/routine.txt')
                        })
                    })
                }
            }
        }
    }
}


console.log(Math.floor(Math.random() * 3));