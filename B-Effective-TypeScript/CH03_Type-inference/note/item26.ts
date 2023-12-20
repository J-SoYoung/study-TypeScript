/**타입 추론이 문맥에서 어떻게 사용되는가 */

////////////////////////////////////////////
// 리터럴 타입 사용시 
type Language2 = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage(language: Language2) { /* ... */ }

// language1 인수는 string에 할당할 수 없다 
let language1 = 'JavaScript'; 
// setLanguage(language1);     

let language2:Language2 = 'JavaScript';
setLanguage(language2);     

const language3 = "JavaScript"
setLanguage(language3);


////////////////////////////////////////////
// 튜플 타입 사용시 
function panTo(where: [number, number]) { /* ... */ }

panTo([10,20])

const loc2: [number, number] = [10, 20];
panTo(loc2);  // OK

// number[]형식의 인수는 [number, number] 형식의 매개변수에 할당할 수 없다
const loc = ([10, 20])
// panTo(loc) 


////////////////////////////////////////////
// 객체 사용시 문제점 
type Language = 'JavaScript' | 'TypeScript' | 'Python';
interface GovernedLanguage {
  language: Language;
  organization: string;
}

function complain(language: GovernedLanguage) { /* ... */ }

// 함수 매개변수(객체)에 바로 타입을 지정한 경우
complain({ language: 'TypeScript', organization: 'Microsoft' });  // OK

// ts를 변수로 빼서 작성한 경우 
// (1)Error 
// const ts = { language: 'TypeScript', organization: 'Microsoft' };
// complain(ts);

const ts2:GovernedLanguage = { language: 'TypeScript', organization: 'Microsoft' };
complain(ts2);

const ts3 = { language: 'TypeScript', organization: 'Microsoft' } as const
complain(ts3)



////////////////////////////////////////////////////////
// 콜백 함수에서의 타입추론
function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
  fn(Math.random(), Math.random());
}

// 함수 내부에서 a와 b의 값의 추론은 잘 이루어진다.
// 함수 내부의 a,b콜백함수를 외부로 빼려고 한다. => 문맥 손실 우려
callWithRandomNumbers((a, b) => {
  a;  // Type is number
  b;  // Type is number
  console.log(a + b);
});

// f1로 만든 상수는 함수 내부의 문맥을 잃어 타입을 찾지 못함
// const fn1 = (a, b) => { console.log(a + b)} 
// callWithRandomNumbers(fn1);

// 상수로 뺀 콜백함수에 타입을 지정해주면 된다.
const fn2 = (a:number, b:number) => { console.log(a + b)} 
callWithRandomNumbers(fn2);

