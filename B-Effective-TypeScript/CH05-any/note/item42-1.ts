/**
 * 모르는 타입의 값에는 unknown을 사용하자 
 * */

////////////////////////////////////////
// any는 강력하지만 위험하다. 
/** 어떠한 타입이든 any타입에 할당이 가능하다 */ 
let anyVariable: any;
anyVariable = 10;       // 숫자 할당
anyVariable = 'Hello';  // 문자열 할당
anyVariable = true;     // 불리언 할당

/**  any타입은 어떠한 타입으로도 할당 가능하다 */
// anyVariable은 any타입을 가지고 있는 변수인데 example이라는 number타입의 변수에 할당됐다. 
let example: number = anyVariable; 


/////////////////////////////////////////
// any 대신 unknown을 사용하자
/** 어떠한 타입이든 unknown에 할당 가능하다  */
let value: unknown;

value = 10; // 숫자 할당
value = 'Hello'; // 문자열 할당
value = true; // 불리언 할당


/** 하지만 unknown은 자기 자신과 any에만 할당이 가능하다  */
let unknownValue: unknown;
let anyValue: any;

unknownValue = value; // 가능
unknownValue = anyValue; // 가능

// 하지만, 다른 타입에는 직접 할당할 수 없다.
let numberValue: number;
// numberValue = value

///////////////////////////////////////////
// any로 함수 반환값 지정하기 X, 컴파일 시 에러발생
function parseYAML(yaml: string): any {
  // ...
}
interface Book { name: string; author: string; }
const book = parseYAML(`name: Jane Eyre, author: Charlotte`);

alert(book.title);  
// 컴파일시 No error, 런타임 시 alerts "undefined" 
book('read');       
// 컴파일시 No error, 런타임시 "TypeError: book is not a function" 

/////////////////////////////////////////////
// 함수 반환값 타입을 unknown으로 지정
// unknown속성에 객체값을 할당할 수 없기 때문에 Error발생  
// 단언문으로 함수의 결과값을 명시해야 한다.
interface Book2 { name: string; author: string; }
function safeParseYAML2(yaml: string): unknown { return '' }
const book2 = safeParseYAML2(`name: Jane Eyre, author: Charlotte`)as Book2

// 제대로 된 타입검사를 하게 된다. 
alert(book2.name)
// alert(book2.title);  // book에는 title 프로퍼티가 없다.
// book2('read');       // book은 함수로 호출할 수 없다. 