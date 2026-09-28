// for (초기값 ; 조건 ; 증가값) { 실행할 코드 }
// (1) 초기값
// (2) 조건
// (3) 실행
// (4) 증가값 > 2번
for (let i = 0; i < 5; i++) {
  // i => 0, 코드 실행
  // i => 1, 코드 실행
  // i => 2, 코드 실행
  // i => 3, 코드 실행
  // i => 4, 코드 실행
  // i => 5, 반복문 중단
  console.log("Hello");
}

const LEN = 10;

for (let i = 0; i < LEN; i++) {
  console.log(i);
}

// 반복문 탈출
for (let i = 0; i < 5; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

// 반복문 건너뛰기
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

// while  (조건) { 실행할 코드 }
let i = 0;
while (i < 10) {
  i++;

  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
