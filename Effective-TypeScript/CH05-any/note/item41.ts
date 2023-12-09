/**
 * any는 진화한다!!!! 
 * 배열에 값이 할당되었을 경우나 
 * 조건문의 분기에 따라 any, any[] 값이 진화한다
 */


/////////////////////////////////////////////
// 지정한 배열의 타입과 값을 넣어 함수를 출하고 난 다음의 타입이 다르다
function range(start: number, limit: number) {
  const out = []; // return type any [] 
  for (let i = start; i < limit; i++) {
    out.push(i);
  }
  return out;  // Return type inferred as number[]
}


/////////////////////////////////////////////
// 조건문 분기에 따라 타입이 다르다 
let val;  // Type is any
if (Math.random() < 0.5) {
  val = /hello/;
  val  // Type is RegExp
} else {
  val = 12;
  val  // Type is number
}
val  // Type is number | RegExp