// (1) 객체 선언 (객체 리터럴)
// 객체에 필요한 값을 추가할 수 있는데, 이를 "객체 프로퍼티"라 부름
let car = {
  company: "Hyundai", // company는 프로퍼티의 이름, "Hyundai"는 프로퍼티의 값
  model: "Sonata2", // 값에는 JS에 존재하는 모든 데이터형이 올 수 있음 (함수도 가능)
  year: 2023,
};

console.log(car);

// (2) 객체 프로퍼티 접근하기 (2가지)
// . 활용
console.log(car.company);
console.log(car.model);

// 대괄호 활용
console.log(car["company"]);
const property = "year";
console.log(car[property]); // 대괄호에 변수도 넣을 수 있음.

// (3) 객체 속성 추가 및 수정
// 수정
car.year = 2020;
console.log(car);

// 추가 - 1
// car.color = "white"
// console.log(car);

// 추가 - 2
const newProperty = "color";
car[newProperty] = "white";
console.log(car);

// (4) 객체 속성 삭제
delete car.year;
console.log(car);

delete car.sunroof; // 없는 속성 삭제 시도 시, 오류는 없지만 객체에 아무런 변화 X
console.log(car);

// (5) 중첩 객체
car.spec = {
  fuelType: "Gasoline",
};

console.log(car.spec);
console.log(car.spec.fuelType);

// (6) 메서드 (객체가 함수를 가지게 되면, 이를 메서드라 부름)
// car의 정보는 객체가 생성될때마다 달라질 수 있음. -> this라는 특수 키워드 이용 -> 여기 car에 있는 프로퍼티에 접근 가능
// 대신, this 키워드로 접근하려면 여기 함수가 화살표 함수가 아니어야 함. (화살표 함수면 접근하지 못하고 undefined 출력)
car.getCarInfo = function () {
  // this 특수한 키워드
  console.log(`Hello, Car!, ${this.model}`);
};

console.log(car.getCarInfo());
