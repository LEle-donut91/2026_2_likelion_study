// (1) 객체의 구조 분해 할당
let person = {
  name: "Alice",
  age: 20,
  city: "New York",
  job: "Developer",
};

// 기존 방식
// const name = person.name;
// const age = person.age;

// 구조 분해 할당 (const 또는 let 키워드 활용)
const { name, age, ...rest1 } = person; // ...rest1와 같이 나머지 부분은 항상 마지막에 써줘야 함!
console.log(name);
console.log(age);
console.log(rest1);

// (2) 배열의 구조 분해 할당
const colors = ["Red", "Green", "Blue"];

// 기존 방식
// const firstColor = colors[0];
// const secondColor = colors[1];

// 구조 분해 할당 (const 또는 let 키워드 활용) -> 배열의 구조 분해 할당은 순서가 중요하다!!! (인덱스 순서대로 가져오므로)
const [firstColor, ...rest2] = colors;
console.log(firstColor);
console.log(rest2);

// (3) 객체의 스프레드 연산 (객체 안전 복사)
// 아래 케이스의 경우, person2만 변경하려고 했는데 person1도 같이 변하게 된다. (객체는 참조 연산자 -> 해당 객체가 가리키고 있는 게 복사되기 때문)
// { name: "Bob", age: 30 }; <- person1
// { name: "Bob", age: 30 }; <- person2 (이런 식으로 됨)
// const person1 = { name: "Bob", age: 30};
// const person2 = person1;
// person2.name = "Alice"
// console.log(person1);

// person1에 있는 걸 일일히 꺼내와서 복사하는 방식은 아래와 같다. (person1과 person2는 다른 객체를 가지게 됨 -> 근데 번거로움)
// const person1 = { name: "Bob", age: 30 };
// const person2 = { name: person1.name, age: person1.age };
// person2.name = "Alice";
// console.log(person1);

// 스프레드 연산 방식
const person1 = { name: "Bob", age: 30 };
const person2 = {
  ...person,
};
person2.name = "Alice";
console.log(person1);

const person3 = { name: "Bob", age: 30 };
const person4 = {
  ...person,

  // 기존에 있는 프로퍼티들을 덮어씌울 수도 있음
  name: "Alice",

  // 새로운 값 추가
  city: "New York",
};
console.log(person3);

// (4) 배열의 스프레드 연산
// 배열도 참조 타입이라 fruits2를 바꾸면 fruits1도 바뀌게 된다.
// const fruits1 = ["Apple", "Banana"];
// const fruits2 = fruits1;
// fruits2.push("Mango");
// console.log(fruits1);

// 스프레드 연산
const fruits1 = ["Apple", "Banana"];
const fruits2 = [...fruits1, "Mango"];
console.log(fruits1);
console.log(fruits2);

// (5) 함수의 나머지 매개변수 - 구조분해할당/스프레드연산과 결이 다르지만 같은 ...을 사용하므로 헷갈리지 않기 위해 추가!!! (함수 호출 시 넣을 인자들을 가변적으로 가져와서 사용)
function sum(...params) {
  console.log(params); // 배열로 출력

  let ret = 0;

  params.forEach((param) => {
    ret += param;
  });

  console.log(ret);
}

sum(10, 20);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
