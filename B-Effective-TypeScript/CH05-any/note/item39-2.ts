/**
  any를 구체적으로 변형해서 사용하기
  any는 TypeScript에서 굉장히 큰 범위다
  그러므로 그것보다 구체적인 타입이 있을 수 있다.
*/

//////////////////////////////////
// 함수의 타입이 any여도 구체화 하라

// 매개변수 없이 호출가능한 모든 함수
type Fn0 =()=> any; 

// 매개변수 1개
type Fn1 =( arg : any )=> any ;

// 모든 개수의 매개변수 = Function타입과 동일함! 
type Fn2 =( ...args : any[] )=> any;


/////////////////////////////////////
// 안돼 금지 any 무작정 반환 ㄴㄴ
function getLengthBad(array: any) {  // Don't do this!
  return array.length;
}
const numArgsBad = (...args: any) => args.length; 

// any []로 타입을 지정한 함수의 활용 
// Returns number
const numArgsGood = (...args: any[]) => args.length;  
