/*
 * 함수 오버로딩
 * 같은 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 */

/*
 * -> 하나의 함수 func
 * -> 일단 모든 매개변수는 넘버타입
 * -> Ver1. 매개변수가 1개일 때에는 매개변수에 20을 곱한 값을 출력
 * -> Ver2. 매개변수가 3개일 때에는 모든 매개변수를 더한 값을 출력
 */

// 오버로드 시그니처 : 함수 타입을 버전별로 작성하는 것
function func(a: number): void;
function func(a: number, b: number, ): void;
function func(a: number, b: number, c: number): void;

/* 실제 구현부 Example (1)
오버로드 시그니처를 작성하면 구현부의 함수를 보고 타입을 결정하지 않는다. 
오버로드 시그니처에 있는 타입을 따라간다.
function func () {}
*/
  // func()
  // func(1)
  // func(1,2)
  // func(1,2,3)


/* 실제 구현부 Example (2)
  구현 시그니처의 매개변수는 모든 오버로드 시그니처와 호환되도록 구현해야 한다.
  그렇기 때문에 매개변수 a.b.c를 필수 매개변수가 아닌 b,c는 선택적 매개변수가 돼야 한다
  이후 if문에서 &&를 사용하여 조건부가 성립되도록 작성해야 한다.
*/
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
func(1);
func(1, 2, 3);
