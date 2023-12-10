/** 
 * 타입 좁히기
 */


/**(1) instanceof를 사용한 타입 좁히기 */
function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    search;  // Type is RegExp
    return !!search.exec(text);
  }
  search;  // Type is string
  return text.includes(search);
}

// 함수 호출 예시
const textToSearch = "Hello, world!";

// Case 1: search가 string인 경우
const searchString = "world";
const resultString = contains(textToSearch, searchString);
console.log(resultString);  // 출력: true

// Case 2: search가 RegExp인 경우
const regexPattern = /world/i;
const resultRegExp = contains(textToSearch, regexPattern);
console.log(resultRegExp);  // 출력: true


/**(2) 명시적 태그를 붙여 타입 좁히기 */
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
// 위의 uploadEvent와 DownloadEvent는 type이라는 리터럴 타입이 있기 때문에 서로 겹치지 않는 관계가 된다.
// 이 서로소 관계에서 union타입을 설정하면 type이 upload이거나 download로 구분될 수 있다


/**(3) 사용자 정의 타입 가드를 활용한 타입 좁히기 */
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


/**(4) 타입가드를 활용한 타입 좁히기 */
// 타입가드를 활용해 undefined를 제외한 값을 return하여 사용.
const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];
function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

const members = ['Janet', 'Michael']
	.map( who => jackson5.find(n => n === who))
	.filter(isDefined);  // Type is string[] 