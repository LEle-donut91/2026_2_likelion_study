// 자동차
const myCar = {
    brand: 'Kia',
    model: 'K5',
    color: 'white',
    weight: 850,
}

console.log(`브랜드: ${myCar.brand}`);
console.log(`모델명: ${myCar.model}`);
console.log(`색깔: ${myCar.color}`);
console.log(`무게: ${myCar.weight}kg`);

// 놀이기구 대기줄
const waitingLine = ["Alice", "Bob", "John"]
console.log(`현재 대기줄: ${waitingLine}`)

// 대기줄 맨 뒤에 사람 2명 추가
waitingLine.push("Tom");
waitingLine.push("Smith");
console.log(`현재 대기줄: ${waitingLine}`)

// 놀이기구에 사람 2명 탑승 (대기줄 맨 앞에 사람 2명 빠짐)
waitingLine.shift();
console.log(`현재 대기줄: ${waitingLine}`)
