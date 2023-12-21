/**
 * 제네릭 
 * 매개변수 타입이 정해지지 않았을 때 가변적으로 타입을 지정해 주는 방법
 * generic 일반적인, 포괄적인  
 */


// 아직 정해지지 않은 매개변수에 any타입을 주었을 때
// 내가 원하는 타입으로 추론되지 않고, any로 추론됨
function func(value: any) {
  return value;
}
// number/string타입을 원하지만 any 타입이 추론 된다
let num = func(10);
let str = func("string");


// unknown으로 매개변수 타입을 지정했다.
// unknown은 제일 최상위 집합에 속하므로 아무것도 할당할 수 없다.
function func2(value: unknown) {
  return value;
}

// unknown 타입으로 추론되어, 어떤 메서드도 사용할 수 없다
let num2 = func2(10);

// num2.toUpperCase(); // ❌
// num2.toFixed(); // ❌


// 이럴 때 사용하는 것이 generic타입이다.
// <T> 타입을 저장하는 변수 : 타입변수 선언 => T
// 매개변수 타입 => T
// 반환값 타입 => T
function func3<T>(value: T): T {
  return value;
}

// 인수로 전달된 값의 타입으로 추론됨
// 타입을 담을 수 있는 변수이기 때문에, T에는 동적으로 타입이 저장된다.
let num3 = func3(10);
let str3 = func3("string");
let bool = func3(true)

// 제네릭 함수에 명시적으로 타입을 지정하고 싶을 때, 
// 타입단언을 사용해도 좋지만, 타입변수에 직접 타입을 지정해도 된다. 
let add1 = func3([1,2,3])
let add2 = func3([1,2,3] as [number,number,number])
let add3 = func3<[number, number, number]>([1,2,3])