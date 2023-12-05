// language type : string
function setLanguage(language: string) { /* ... */ }

setLanguage('JavaScript');  // OK

let language = 'JavaScript';
setLanguage(language);  // OK

// language2 type : Union literal typt
type Language2 = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage2(language: Language2) { /* ... */ }

let language2: Language2 = 'JavaScript';
setLanguage2(language2);  // OK


// 튜플 사용시 ---------------------------------------------------
function panTo(where: [number, number]) { /* ... */ }

// 명확한 타입을 가진 인수로 함수 호출을 하게 되면 문제가 없다.
panTo([10,20])

// 인수를 변수로 빼서 만들고 이를 호출하는 경우 TS의 타입추론에 문제가 생길 수 있다 
const loc = ([10, 20])
// panTo(loc) // number[]형식의 인수는 [number, number] 형식의 매개변수에 할당할 수 없다

// 변수를 만들었을 경우에는 변수에 명확한 타입 지정을 해야 한다
const loc2: [number, number] = [10, 20];
panTo(loc2);  // OK

// 혹은 as const로 상수 문맥을 제공한다 => 이는 너무 과한 정확성이므로 readonly가 되어버리므로 비추..
const loc3 = [10, 20] as const;
// panTo(loc3);
   // ~~~ Type 'readonly [10, 20]' is 'readonly' ... 오히려 과한 에러 발생ㅋㅋ


// 객체 사용시 문제점
type Language = 'JavaScript' | 'TypeScript' | 'Python';
interface GovernedLanguage {
  language: Language;
  organization: string;
}

function complain(language: GovernedLanguage) { /* ... */ }

complain({ language: 'TypeScript', organization: 'Microsoft' });  // OK

const ts : GovernedLanguage = {
// const ts = { // TS의 타입추론이 아닌 명확한 타입을 지정해줘야 한다
  language: 'TypeScript',
  organization: 'Microsoft',
};
complain(ts);
// ts에 타입지정을 하지 않았을 경우, 
// 리터럴 스트링 유니온 타입의 객체를 string으로 보기 때문에 TypeError


