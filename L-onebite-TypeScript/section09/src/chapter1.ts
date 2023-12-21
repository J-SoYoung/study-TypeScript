/**
 * 조건부타입
 */

// number타입이 string타입을 확장하는 타입이니? T / F 
// number와 string타입은 각각의 타입임으로 False가 나오고 A는 number가 된다
type A = number extends string ? string : number

type ObjA = {
  a: number;  // 슈퍼 타입
};

type ObjB = {
  a: number;  // 서브타입
  b: number;
};

// ObjB가 ObjA를 확장하는 타입이니?  
// ObjB는 ObjA의 속성을 모두 포함하고, 추가적인 속성이 있으므로 ObjB는 ObjA를 확장한다 
type B = ObjB extends ObjA ? number : string;


/**
 * 제네릭과 조건부 타입
 */

// 제네릭과 조건부 타입(1) 
type StringNumberSwitch<T> = T extends number ? string : number;
// <T> 타입변수를 사용하여 제네릭 타입을 사용중이라고 선언
// T가 number를 확장하는 타입이니? 조건부 타입을 사용하고 => 
// 아래 변수에 결과값에 따른 타입을 <number>처럼 변수 옆에 제네릭으로 지정
// T가 number가 되어 조건부에 해당하는 결과값 타입이 됨 

// string
let varA: StringNumberSwitch<number>;
// number
let varB: StringNumberSwitch<string>;


// 제네릭과 조건부 타입 + 함수 오버로딩 (2)

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  // 함수 반환값에 조건부 타입 지정하거나, 위 처럼 오버로딩을 사용할 수도 있다
  // function removeSpaces<T>(text: T): T extends string ? string : undefined {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
// string
let result2 = removeSpaces(undefined);
// undefined ( TSplayground에선 undefined로 나옴 @_@ )
 