// void = 아무것도 없음을 의미한다

function func1(): string {
  // 함수의 반환값 타입은 string이다.
  return "hello";
}
function func2(): void {
  // 함수는 아무것도 반환하고 있지 않다.
  console.log("hello");
}

// never = 존재하지 않는, 불가능한 타입
// 함수가 어떠한 값도 반환할 수 없는 상황일 때
function func3(): never {
  while (true) {}
}
