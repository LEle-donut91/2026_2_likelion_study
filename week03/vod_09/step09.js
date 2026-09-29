// (1) 배열 선언 (배열 리터럴)
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let mixedArray = [
  42,
  "Hello",
  true,
  { key: "value" },
  [1, 2, 3],
  function () {
    console.log("I'm a function");
  },
];

console.log(mixedArray);
console.log(mixedArray[3].key);
console.log(mixedArray[5]());

// (2) 배열을 다룰 수 있는 기본 메서드
// 2.1 push -> 배열의 끝에 요소를 추가
fruits.push("Grape");
console.log(fruits);

// 2.2 pop -> 배열의 마지막 요소를 제거
fruits.pop();
console.log(fruits);

// 2.3 shift -> 배열의 첫 번째 요소를 제거
fruits.shift();
console.log(fruits);

// 2.4 unshift -> 배열의 첫 번째 요소를 추가
fruits.unshift("Grape");
console.log(fruits);

// 2.5 splice -> 특정 위치에 있는 요소를 삭제하거나, 추가할 수 있음
// (시작 인덱스, 몇 개를 삭제할지, 삭제하고 이 사이에 어떤 데이터들을 넣을지)
fruits.splice(1, 1, "A", "B", "C");
console.log(fruits);

// 2.6 slice -> 배열의 일부를 잘라서 반환하는 메서드 (위에 있는 것들은 직접적으로 배열을 변경했지만, slice는 배열을 변경하지 X)
let slicedFruits = fruits.slice(1, 3); // 1번째 인덱스부터 3번째 인덱스를 slice (시작 인덱스, 끝나는 인덱스) -> 끝나는 인덱스는 포함하지 X
console.log(slicedFruits);

// (3) 배열의 응용 메서드
// 3.1 forEach -> 배열의 모든 요소 순회 (인자로 함수를 넣음 -> 이 함수의 파라미터는 배열의 요소, 몇 번째 인덱스 순회 중인지)
fruits.forEach((fruit, index) => {
  console.log(`Index: ${index}: ${fruit}`);
});

// 3.2 filter -> 특정 조건을 만족하는 요소만 새로운 배열로 반환 (기존의 배열을 건드리지 X)
// (filter 메서드에 함수 전달 시, filter가 해당 함수 실행시켜서 Boolean을 반환한 값들만 새로운 배열로 만들어 반환)
// filter에 들어가는 함수의 파라미터 -> numbers 배열의 각각의 요소
let numbers = [10, 20, 30, 45, 60];
let filteredNumbers = numbers.filter((number) => {
  return number > 30; // 30보다 큰 요소만 필터링
});

console.log(numbers);
console.log(filteredNumbers); // 45, 60 출력

// 3.3 map -> 배열의 각 요소를 변형하여 새로운 배열 생성 (기존 배열을 건드리지 X)
let doubleNumbers = number.map((number) => {
  // map에 화살표 함수를 넣고, 화살표 함수의 파라미터로 numbers 배열의 각각의 요소를 넣음
  return number * 2; // 이 반환된 값을 가지고 새로운 배열 만들어냄
});

console.log(numbers);
console.log(doubleNumbers);
