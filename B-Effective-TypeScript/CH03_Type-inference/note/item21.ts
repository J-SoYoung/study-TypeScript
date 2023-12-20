/**
 * 타입 넓히기
  변수를 초기화 할 때 타입이 명시돼 있지 않으면 
  TS는 지정된 값을 가지고 할당 가능한 타입들을 유추해야 한다. 이러한 과정을 타입 넓히기라고 한다. 
 */

///////////////////////////////////////////////////////
/** 
 * TS는 mixed상수의 타입을 아래와 같이 유추한다
  이후 코드가 쓰여진 문맥, as const, const, 타입 구문 등을 통해 타입을 결정한다 

  const mixed = ['x', 1]

  ('x'| 1 )[]
  ['x', 1 ]
  [string, number]
  readonly [string, number]
  (string | number)[]
  readonly (string | number)[]
  [any, any]
  any[]
 */


///////////////////////////////////////////////////// 
// 타입 넓히기 제어 
// (1) 타입 체커에 추가적인 문맥을 제공
// (2) 명시적 타입 구문 제공
// (3) 상수 const 선언 또는 as const 단언문 사용


const vv: { x: 1 | 3 | 5 } = {  x: 1 }; 

const x = 'x'; // type 'x'
const v = { x: 1 }; 
// 상수로 정의된 값이지만 객체이기 때문에 {x: number}로 추론된다.

const v1 = { x: 1, y: 2 }; 
// Type is { x: number; y: number; }
// 상수로 정의됐어도 객체 안의 프로퍼티는 재할당이 가능하다. 
// 그래서 TS는 x,y의 타입을 number로 추론한다

const v2 = { x: 1 as const, y: 2 }; 
// Type is { x: 1; y: number; }
// as const로 인해 x는 number literal의 1 값으로 지정됨  

const v3 = { x: 1, y: 2 } as const; 
// Type is { readonly x: 1; readonly y: 2; }
// 객체 전체의 값을 바꿀 수 없으므로 읽기 전용의 값으로 추론된다.  

const a1 = [1, 2, 3]; 
// Type is number[]

const a2 = [1, 2, 3] as const; 
// Type is readonly [1,2,3]

