///////////////////////////////////////////////
/** item2 배열 안에 객체가 있는 데이터 타입 지정*/
interface State0 {
  name: string;
  capital: string;
}
const states: State0[] = [
  {name: 'Alabama', capital: 'Montgomery'},                
  {name: 'Alaska',  capital: 'Juneau'},
  {name: 'Arizona', capital: 'Phoenix'},
];
for (const state of states) {
  console.log(state.capital);
}


///////////////////////////////////////////////
/** item3
 * extends로 타입 확장한 뒤에, 
 * in연산자로 타입 좁히기 
 * */
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;
function calculateArea(shape: Shape) {
  if ('height' in shape) {
    shape;  // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape;  // Type is Square
    return shape.width * shape.width;
  }
}


///////////////////////////////////////////////
/* item3 서로소 유니온 타입, 태그기법으로 타입좁히기 
 * 각 인터페이스에 kind, tag를 지정해서 사용
 */
interface Square2 {
  kind: 'square';
  width: number;
}
interface Rectangle2 {
  kind: 'rectangle';
  height: number;
  width: number;
}
type Shape2 = Square2 | Rectangle2;

function calculateArea2(shape: Shape2) {
  if (shape.kind === 'rectangle') {
    shape;  // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape;  // Type is Square
    return shape.width * shape.width;
  }
}

///////////////////////////////////////////////
/** item3 함수 오버로딩,
 * 오버로드 시그니처는 여러개 일 수 있으나, 
 * 구현부는 하나다.
*/
function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
func(1);
func(1, 2, 3);


///////////////////////////////////////////////
/** item6 매개변수 입력값에 null을 반환값에서 없애기 */
// function getElement(elOrId: string|HTMLElement|null): HTMLElement {
//   if (typeof elOrId === 'object') {
//     return elOrId;
//  // ~~~~~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
//   } else if (elOrId === null) {
//     return document.body;
//   } else {
//     const el = document.getElementById(elOrId);
//     return el;
//  // ~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
//   }
// }


///////////////////////////////////////////////
/** item7 extends사용해서 타입 확장하기 */
interface Person {
  name: string;
}
interface PersonSpan extends Person {
  birth: Date;
  death?: Date;
}

///////////////////////////////////////////////
/** item7 extends와 제네릭 사용해서 매개변수 타입 확장하기 */
function getKey<K extends string>(val: any, key: K) {
  // ...
}
function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  // ...
  return []
}

///////////////////////////////////////////////
/** itme8 매개변수 받을 때 타입 */
// 매개변수 받을 때 
interface Person {
  first: string;
  last: string;
}
function email(options: {person: Person, subject: string, body: string}) {
  // ...
}

// 구조분해할당으로 받을 때, 값과 타입 공간 구분하기
interface Person2 {
  first: string;
  last: string;
}
function email2(
  {person, subject, body}: { person: Person2, subject: string, body: string}
) {
  // ...
}

///////////////////////////////////////////////
/** item9 타입 선언, 타입 단언 */
interface Person3 { name: string };

const alice: Person3 = { name: 'Alice' };  // Type is Person
const bob = { name: 'Bob' } as Person3;  // Type is Person
const bob2 = {} as Person3

// 화살표 함수에서 타입 단언 사용하기
interface Person4 { name: string };
const people4 = ['alice', 'bob', 'jan']
  .map(name => ({name} as Person)
); // Type is Person[]


///////////////////////////////////////////////
/** itme12 함수표현식 타입 적용*/
// 문장
function rollDice1(sides: number): number { return 0; } 
// 표현식
const rollDice2 = function(sides: number): number { return 0; };
const rollDice3 = (sides: number): number => { return 0; };  

// 반복되는 함수 시그니처 타입 지정
type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;


///////////////////////////////////////////////
/** item13 type, interface 사용 타입 지정*/

// 인덱스 시그니처
type TDict = { [key: string]: string };
interface IDict { [key: string]: string; }

// 함수 타입
type TFn = (x: number) => string;
interface IFn {(x: number): string };

// 제네릭
type TPair<T> = {
  first: T;
  second: T;
}
interface IPair<T> {
  first: T;
  second: T;
}

// 튜플
type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];


///////////////////////////////////////////////
/** item14 타입 중복 줄이기 */

// (1) 타입에 이름 붙이기
// 매개변수에 직접 타입작성하기 X 중복됨
function distance1(a: {x: number, y: number}, b: {x: number, y: number}) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
// 타입으로 빼서 매개변수에 타입 지정
interface Point2D {
  x: number;
  y: number;
}
function distance(a: Point2D, b: Point2D) { /* ... */ }


// (2) 시그니처 분리
// 분리전, 함수에 타입 지정
interface Options {}

function get1(url: string, opts: Options): Promise<Response> { 
  return Promise.resolve(new Response()); }
function post1(url: string, opts: Options): Promise<Response> { 
  return Promise.resolve(new Response()); }


//분리후, 타입 시그니처 생성
interface Options2 {}
type HTTPFunction = (url: string, options: Options2) => Promise<Response>;

const get2: HTTPFunction = (url, options) => { 
  return Promise.resolve(new Response()); };
const post2: HTTPFunction = (url, options) => { 
  return Promise.resolve(new Response()); };

// (3) 인터페이스 확장
interface Person {
  firstName: string;
  lastName: string;
}

interface PersonWithBirthDate extends Person {
  birth: Date;
}

///////////////////////////////////////////////
/** item14 공통된 데이터의 전체타입과 부분타입 지정 */
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}

// (1) State타입의 부분으로 TopNavState를 구성하라
// TopNavState는 State의 속성에 해당하는 타입을 사용하게 됨
interface State2 {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
type TopNavState2 = {
  userId: State2['userId'];
  pageTitle: State2['pageTitle'];
  recentFiles: State2['recentFiles'];
};

// (2) 매핑된 타입으로 생성, mapped type 맵드타입
// 유니온 된 키값을 in연산자로 하나씩 받아서 타입 키값을 만든다. 
// 값도 마찬가지. State2의 프로퍼티들의 키값의 값을 사용하겟다.WOW. 
type TopNavState3 = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State2[k]
};

// (3) 유틸리티 타입 Pick (utility)
// 특정 객체로부터 특정 프로퍼티를 뽑아냄@@
type TopNavState4 = Pick<State2, 'userId' | 'pageTitle' | 'recentFiles'>;


///////////////////////////////////////////////
// 유틸리티 타입 Partial : 모든 속성을 선택적으로 만들어주는 역할 
// 매핑된 타입 + keyof, mapped type, 맵드타입으로 구현
type Partial2<T> = {
  [P in keyof T]?: T[P];
};


///////////////////////////////////////////////
/** 매핑된 타입 + keyof, mapped type, 맵드타입  */
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}
interface OptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}

type OptionsKeys = keyof Options;
// Type is "width" | "height" | "color" | "label"

type OptionsUpdate2 = { [k in keyof Options]?: Options[k] };
// 매핑된 속성으로 키값 나열, 값도 키값에 따라. 

///////////////////////////////////////////////
/** item19 비구조화 할당문으로 사용해 타입 지정*/
interface Product {
  id: string;
  name: string;
  price: number;
}
// 비구조화 할당
function logProduct(product: Product) {
  const {id, name, price} = product;
}
// 타입지정
function logProduct2(product: Product) {
  const {id, name, price}: {id: string; name: string; price: number } = product;
  console.log(id, name, price);
}

///////////////////////////////////////////////
/** item19 프로미스 함수 결과값 타입넣기  */
const cache: {[ticker: string]: number} = {};
function getQuote2(ticker: string): Promise<number> {
  if (ticker in cache) {
    return Promise.resolve(cache[ticker]);
  }
  return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then(response => response.json())
      .then(quote => {
        cache[ticker] = quote;
        return quote;
      });
}

///////////////////////////////////////////////
/** item22 instanceof로 타입 좁히기 */
function contains(text: string, search: string|RegExp) {
  if (search instanceof RegExp) {
    search  // Type is RegExp
    return !!search.exec(text);
  }
  search  // Type is string
  return text.includes(search);
}

///////////////////////////////////////////////
/** item22 명시적 태그 붙여 타입 좁히기 */
interface UploadEvent { type: 'upload'; filename: string; contents: string }
interface DownloadEvent { type: 'download'; filename: string; }
type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent) {
  switch (e.type) {
    case 'download':
      e  // Type is DownloadEvent
      break;
    case 'upload':
      e;  // Type is UploadEvent
      break;
  }
}

///////////////////////////////////////////////
/** item22 사용자 정의 타입 가드로 타입 좁히기 */
function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return 'value' in el;
}

function getElementContent(el: HTMLElement) {
  if (isInputElement(el)) {
    el; // Type is HTMLInputElement
    return el.value;
  }
  el; // Type is HTMLElement
  return el.textContent;
}

///////////////////////////////////////////////
/** item22 사용자 정의 타입 가드로 타입 좁히기 (2) */
// undefinde가 잘 걸러지지 않는다
const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];
const members = ['Janet', 'Michael'].map(
  who => jackson5.find(n => n === who)
);  // Type is (string | undefined)[]

// 사용자 정의 타입 가드로 타입을 좁힐 수 있다
const jackson52 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];
function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
const members2 = ['Janet', 'Michael'].map(
  who => jackson52.find(n => n === who)
).filter(isDefined);  // Type is string[]


///////////////////////////////////////////////
/** itme23 객체 생성은 한꺼번에 */
// pt를 빈 객체로 두고 x,y를 추가하면 Error남
interface Point { x: number; y: number; }
const pt = {
  x: 3,
  y: 4,
};  // OK

// 작은 객체를 조합해 큰 객체를 만들어야 할 때 스프레드 연산자 사용
interface Point2 { x: number; y: number; }
const pt2 = {x: 3, y: 4};
const id2 = {name: 'Pythagoras'};
const namedPoint = {...pt2, ...id2};
namedPoint.name;  // OK, type is string


///////////////////////////////////////////////
/** item 26 타입 지정  */
type Language2 = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage(language: Language2) { /* ... */ }
    

// 정확한 타입을 지정해줘야 한다 
let language2:Language2 = 'JavaScript';
setLanguage(language2);     

// 혹은 language를 const 상수로 지정해도 된다. 
const language3 = "JavaScript"
setLanguage(language3);

///////////////////////////////////////////////
/**  */


///////////////////////////////////////////////
/**  */


///////////////////////////////////////////////
/**  */
