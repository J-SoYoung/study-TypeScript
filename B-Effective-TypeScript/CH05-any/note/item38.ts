/** 
 * 최소한의 범위에서 any사용하기
  f1과 f2는 모두 expressionReturningFoo 함수에서 반환되는 값을 processBar 함수에 전달하는데, any를 사용하는 방법에 차이가 있다.
*/

interface Foo { foo: string; }
interface Bar { bar: string; }

declare function expressionReturningFoo(): Foo;
function processBar(b: Bar) { /* ... */ }

function f1() {
  const x: any = expressionReturningFoo();  // Don't do this
  processBar(x);
}

function f2() {
  const x = expressionReturningFoo();
  processBar(x as any);  // Prefer this
}
/* ////////////////////////////////////
f1함수
  상수 x에 any 타입을 지정, 
  - expressionReturningFoo 함수의 값이 any 타입으로 간주되어 정확한 타입 체커가 되지 않는다. 
  - processBar에 매개변수 타입이 검사되지 않아, 어떤 타입의 값이든 전달될 수 있다. 
*/

/*////////////////////////////////////
f2함수 - 타입 캐스팅 사용
  -  특정 값이나 표현식의 타입을 개발자가 명시적으로 다른 타입으로 변환하는 것을 말함 ( as 키워드와 함꼐  사용 )
  - as any를 사용하더라도 해당 값에 대한 타입 정보는 유지 된다
 */


/////////////////////////////////////////////
// 최소한의 범위에서 any 사용

  interface Config {
    a: number;
    b: number;
    c: {
      key: Foo;
    };
  }

  declare const value: Bar;

  const config: Config = {
    a: 1,
    b: 2,  // These properties are still checked
    c: {
      key: value as any
    }
  };

  const config2: Config = {
    a: 1,
    b: 2,
    c: {
      key: value
    }
  } as any;  // Don't do this! 객체 전체에 any를 사용하지 말라!