// const yura = {
//   firstName: 'yura',
//   lastName: 'choi',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

//일반함수에서 this는 호출한 객체
// console.log(yura.getFullName());

//생성자 함수
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//프로토타입에 추가된 함수는 객체 전체가 공유한다
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const yura = new User('yura', 'choi');
const jungwoo = new User('jungwoo', 'moon');

console.log(jungwoo.getFullName());
