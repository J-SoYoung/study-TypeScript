/**
 * 함수 타입 표현식
 * 함수 타입을 별칭과 함께 사용하기
 */

// 별칭이름 = ( 매개변수 타입 ) => 반환값 타입
type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a + b;
const multiply: Operation = (a, b) => a + b;
const divide: Operation = (a, b) => a + b;

/**
 * 호출 시그니처 (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
};
function func(a: number): void {}
// 함수에 타입을 지정하는 방식과 위의 호출 시그니처의 방식이 같다.

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a + b;
const multiply2: Operation2 = (a, b) => a + b;
const divide2: Operation2 = (a, b) => a + b;
