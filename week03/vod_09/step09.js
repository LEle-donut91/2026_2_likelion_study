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
fruits.unshift("Grape")
console.log(fruits)

// 2.5 splice -> 특정 위치에 있는 요소를 삭제하거나, 추가할 수 있음
// (시작 인덱스, 몇 개를 삭제할지, 삭제하고 이 사이에 어떤 데이터들을 넣을지)
fruits.splice(1, 1, "A", "B", "C");
console.log(fruits);

// 2.6 slice -> 배열의 일부를 잘라서 반환하는 메서드 (위에 있는 것들은 직접적으로 배열을 변경했지만, slice는 배열을 변경하지 X)
let slicedFruits = fruits.slice(1, 3); // 1번째 인덱스부터 3번째 인덱스를 slice (시작 인덱스, 끝나는 인덱스) -> 끝나는 인덱스는 포함하지 X
console.log(slicedFruits);

// (3) 배열의 응용 메서드

