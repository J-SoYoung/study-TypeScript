/**
 * 분산적인 조건부 타입 실용 에제
 */

type Exclude<T, U> = T extends U ? never : T;
// 타입변수 T, U를 사용하는 제네릭이다. 
// T의 타입이 확장하고 있니 U를 ? => T가 U의 서브타입이니? 
// ( T의 타입은 U를 포함하고 프로퍼티가 더 추가되느냐 )


type A = Exclude < number | string | boolean , string >;
/**
 * 위 코드는 다음의 흐름으로 동작합니다.
  1. Union 타입이 분리된다.
    Exclude<number, string>
    Exclude<string, string>
    Exclude<boolean, string>
  2. 각 분리된 타입을 모두 계산한다.
    T = number, U = string 일 때 number extends string 은 거짓이므로 결과는 number
    T = string, U = string 일 때 string extends string 은 참이므로 결과는 never
    T = boolean, U = string 일 때 boolean extends string 은 거짓이므로 결과는 boolean
  3. 계산된 타입들을 모두 Union으로 묶는다
    결과 :  number | never | boolean => number | boolean
*/

type Extract< T , U > = T extends U ? T : never

type B = Extract < number | string | boolean, string >
