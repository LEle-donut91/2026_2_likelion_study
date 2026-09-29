// named export (함수의 이름을 유지한채로)
export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}
export function mul(a, b) {
  return a * b;
}

// default export (import에서 이름을 마음대로 지정 가능, 단 default는 한 번만 내보낼 수 있음)
export default function () {
  console.log("Hello, JavaScript!");
}

// 함수뿐만 아니라 어떤 변수든 밖으로 내보낼 수 있음
export const PI = 3.14; // PI 값 바뀌면 import 한 곳에서도 바뀌게 됨.
