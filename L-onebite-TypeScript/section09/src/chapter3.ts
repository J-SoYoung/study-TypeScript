/**
 * infer - 조건부 타입 내에서 특정 타입 추론하기
 * inference 추론하다 : infer R / R을 추론하라
 */

type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;
type FuncB = () => number;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // number

/**
  결과값 : string
  string의 반환값을 가진 함수를 타입으로 두고 ReturType<T>의 타입을 정해보면
  T는 ()=>infer R을 확장했니? ( T는 서브 타입이니? ) 
  infer R은 위의 조건식의 결과를 참으로 만들어주는 역할을 하기 때문에
  R의 값은 string이 되는 것
  
  조건식을 참으로 만드는 R타입을 추론할 수 있으면 조건식 참을 반환, R타입 반환
*/

type C = ReturnType<number> // never
/**
  결과값 : never
  number타입은 원시타입이고 
  ()=> number은 합수 타입이기 때문에 둘의 관계는 확장 관게에 있을 수 없기에
  결과값은 false => never가 되는 것 
 */


// infer R 예시 (2) ------------------------------
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never  
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

/* 
  T는 Promise< ~~ >타입을 확장하고 있는가? ( 서브타입인가? )
  확장하고 있다면 Promise 뒤의 R을 반환. ㅇㅅㅇ;
  */ 

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string