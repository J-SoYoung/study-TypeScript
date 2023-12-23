const obj = {
  one: 'uno',
  two: 'dos',
  three: 'tres',
};
// k와 obj객체의 키 타입이 맞지 않아 ERror발생 -  TSground에서봐야함
for (const k in obj) {
  const v = obj[k];
         // ~~~~~~ Element implicitly has an 'any' type
         //        because type ... has no index signature
}

// obj의 key를 추출해 k의 타입으로 지정해줌.
let k : keyof typeof obj
for ( k in obj) {
  const v = obj[k];
  console.log(v)
}

