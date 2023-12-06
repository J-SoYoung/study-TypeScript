// Exclude , Extract , Return Type

/**
 *  Exclude<T,U>
 *  제외하다, 추방하다
 *  T에서 U를 제거하는 타입이다
 */


type A = Exclude < string | boolean, boolean >
// string | boolean 타입에서 boolean을 제거한 타입!!

// Exclude 타입을 구현해보기 => 조건부타입으로 구현
type Exclude < T, U > = T extends U ? never : T ;
/**
 * 1 단계
  type이름은 Exclude고 제네릭함수로 타입변수 2개가 있음
  T ( string | boolean ) 는 U( boolean ) 를 확장하니?   
  < string, boolean > = string
  < boolean, boolean > = never 

 * 2 단계
  string | never => 공집합은 포함되지 않는다 
 */


/**
 * Extract < T,U >
 * T에서 U를 추출하는 타입
 */
type B = Extract < string | boolean, boolean >

// 구현해보기
type Extract<T, U> = T extends U ? T : never;


/**
 * ReturnType<T>
 * 타입변수 T에 할당된 함수 타입의 반환값 타입을 추출하는 타입
 */

function funcA(){ return 'string'; }
function funcB(){ return 10; }

type ReturnA = ReturnType<typeof funcA>
type ReturnB = ReturnType<typeof funcB>
