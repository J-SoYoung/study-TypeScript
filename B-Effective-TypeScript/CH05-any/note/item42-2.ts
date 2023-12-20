/**
 * unknown 타입 좁히기
  unknown은 어떠한 타입도 가질 수 없기 때문에 
  사용자가 제공한 정보를 통해 TS가 타입을 추론한다.
 */

/** unknown 타입 좁히기(1) 타입 단언문 */
interface Book { name: string; author: string; }
function safeParseYAML(yaml: string): unknown { return '' }

const book = safeParseYAML(`
  name: Jane Eyre, author: Charlotte
  `)as Book
alert(book.name)


/** unknown 타입 좁히기(2) instanceof 체크 ( 타입가드 )*/
// 특정 조건이 충족될 때 변수의 타입을 좁히는 타입가드의 예시
// val가 Date의 인스턴스인지 확인하고, 
// if문 안에서 val는 Date타입으로 간주되어 해당 메서드를 사용할 수 있다.
interface Geometry {}
function processValue(val: unknown) {
  if (val instanceof Date) {
    val  // Type is Date
  }
}

/** unknown 타입 좁히기(3) 사용자정의 타입 가드 */
// isBook은 사용자 정의 타입 가드를 위한 함수로 결과값이 True이면 val를 Book타입으로 인지하겠다는 의미다. 
// isBook의 타입은 => function isBook(val: unknown): val is Book 나온다
interface Book {
  name: string;
  author: string;
}

function isBook(val: unknown): val is Book {
  return (
      typeof(val) === 'object' && val !== null &&
      'name' in val && 'author' in val
  );
}

function processValue2(val: unknown) {
  if (isBook(val)) {
    val;  // Type is Book
  }
}