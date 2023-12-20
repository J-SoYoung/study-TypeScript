/**
 * 함수 표현식에 타입 적용하기
  타입스크립트에서는 함수 표현식을 사용하는 것이 좋다. 
  함수의 매개변수, 반환값 전체를 함수 타입으로 선언하여 함수 표현식에 
  재사용 할 수 있기 때문이다.
 */

  function add(a: number, b: number) { return a + b; }
  function sub(a: number, b: number) { return a - b; }
  function mul(a: number, b: number) { return a * b; }
  function div(a: number, b: number) { return a / b; }

//  => 반복되는 함수 시그니처를 하나의 함수 타입으로 통합할 수 있다. 
  type BinaryFn = (a: number, b: number) => number;
  const add2: BinaryFn = (a, b) => a + b;
  const sub2: BinaryFn = (a, b) => a - b;
  const mul2: BinaryFn = (a, b) => a * b;
  const div2: BinaryFn = (a, b) => a / b;