// (1) Number Type
let num1 = 42;
let num2 = 3.14;

// 무한대
let num3 = Infinity;
let num4 = -Infinity;

// Not a Number
let num5 = NaN;
let num5_1 = "hello"; // 숫자가 아니므로 JS는 이를 NaN으로 처리

// (2) String Type
let str1 = "Hello";

// 아래와 같이 prettier-ignore라고 쓰면 그 다음 줄이 prettier가 동작하지 X
// prettier-ignore
let str2 = 'Hello';

// 백틱 (`) -> 템플릿 리터럴
let str3 = `Hello, ${num1} World, ${num1}`;

console.log(str3);

// (3) Boolean Type -> 조건문/반복문에서 효과적으로 활용
let isStudent = true;
let isAdult = false;

// (4) undefined Type (변수 선언은 했지만 초기화를 하지 않았을 때 undefined 값이 들어감)
let user;

console.log(user);

// (5) Null Type (개발자가 의도적으로 이 값이 비어있는 값이라고 지정해준 것)
let user2 = null;
