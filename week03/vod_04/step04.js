// (1) 산술 연산자
console.log(5 + 3)
console.log(5 - 3)
console.log(5 * 3)
console.log(5 / 3)
console.log(5 % 3)
console.log(5 ** 3)

// (2) 문자열 연결 연산자
console.log("Hello" + "World"); // 여기서는 + 를 문자열 연산자라고 구분해서 명칭한다.
console.log("Hello" + 42); // 42를 문자열로 형변환한 뒤 문자열 연산자로 작동 (암시적 형변환)
console.log("Hello" + String(42)); // 명시적 형변환 (주로 이 방법이 더 권장됨)

// (3) 비교 연산자 (Boolean 반환)
console.log(5 > 3)
console.log(5 < 3)
console.log(5 <= 3)
console.log(5 >= 3)

console.log(5 == "5") // 값이 같은지만 비교 (true)
console.log(5 === "5") // 값과 자료형 둘다 같은지 비교 (false) -> 이게 협업에서 더 권장됨

console.log(5 != 5); // 한쪽 타입으로 맞춰서 형변환 후 값 비교 (false)
console.log(5 !== '5'); // 타입이 다르면 다르다고 봄 (true)

// (4) 논리 연산자
console.log(true && true);
console.log(true && false);

console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);

// (5) 삼항 연산자
// A ? B : C
let score1 = 85;

console.log(score1 >= 90 ? "Pass" : "Fail");

// (6) 대입 연산자
let score2 = 90;

score2 += 10;
score2 -= 10;
score2 *= 10;
score2 /= 10;

console.log(score2);

// (7) 증강 연산자
let x = 10;

// x += 1;
let y1 = x++; // 후위 연산 (증가 전 값 대입 -> 그 뒤에 증가)

console.log(y1); // 10
console.log(x); // 11

let y2 = ++x; // 전위 연산 (증가 먼저 -> 그 뒤에 값 대입)

console.log(y2); // 11
console.log(x); // 11

--y1;
y1--;
