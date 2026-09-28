function greet(user) {
  console.log(user);

  let message = `Hello, ${user}`;
  console.log(message);
}

greet("alice");
greet("Bob");

function add(a, b) {
  console.log(a + b);

  let ret = a + b;
  return ret;
}

let sum1 = add(10, 20);
let sum2 = add(20, 30);
let sum3 = add(30, 40);
let sum4 = add(60, 100);

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);

// 함수 표현식 (이름이 없는 함수)
let func1 = function (a, b) {
  return a + b;
};

let sum5 = func1(10, 20);
console.log(sum5);

// 위의 함수 표현식은 화살표 함수로도 사용 가능 (function 키워드를 없애고, 소괄호와 중괄호 사이에 => 화살표 삽입)
let func2 = (a, b) => {
  return a + b;
};

let sum6 = func2(10, 50);
console.log(sum6);

// 더 축약해서 한 줄로 작성한 형태
let func3 = (a, b) => a + b;

let sum7 = func3(20, 50);
console.log(sum7);

// 더 짧은 형태 (매개변수가 1개만 있으면 소괄호를 생략할 수 있음)
// prettier-ignore
let func4 = (a) => a ** 2;

let result = func4(20);
console.log(result);
