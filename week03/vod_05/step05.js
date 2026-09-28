let score = 95;

if (score >= 90) {
  console.log("90점이 넘었습니다.");
} else {
  console.log("90점이 넘지 않았습니다.");
}

// 100 ~ 90 : A
// 89 ~ 80 : B
// 79 ~ 70 : C
// 69 ~ : D

if (score >= 90) {
  console.log("A!!");
} else if (score >= 80) {
  console.log("B!!");
} else if (score >= 70) {
  console.log("C!!");
} else {
  console.log("D!!");
}

// break를 쓰지 않으면 전부 다 실행하게 됨
let day = "Sunday";

switch (day) {
  case "Monday":
    console.log("월요일입니다.");
    break;

  case "Friday":
    console.log("금요일입니다.");
    break;

  // 어떤 조건에도 부합하지 않았을 경우 실행
  default:
    console.log("아무 요일도 아닙니다.");
}
