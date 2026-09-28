let user = "david";

console.log(user);

const birth = "2010.01.01";

console.log(birth);

user = "alex";

console.log(user);

// // 상수 재할당 불가
// birth = "2000.01.01";

// // 상수, 변수 -> 똑같은 이름으로 선언하는 건 불가능
// let user = "alex";
// let birth = "2010.01.01";

// (1) 변수 이름에 들어갈 특수 문자는 _, $#만 가능
let _user = "miso";
let $user = "hello";

// (2) 변수 이름에 숫자는 앞에 올 수 없다.
// let 2user = 'hello2';
let user2 = 'hello2';

// (3) 자바스크립트에서 사용하는 예약어는 변수 이름으로 사용할 수 없다
// let let = 'hello2';

// 권장사항 - (4) 변수 이름은 의미가 있어야 한다.
// let x = 25;
let age = 25;

// 권장사항 - (5) 변수 이름은 카멜케이스
let userLastName = 'so';
let useFirstName = 'so';



