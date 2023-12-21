// 배열

// 배열 안의 요소 타입부터 작성한 뒤, 배열을 나타내준다
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["thdud", "hello"];

// 제네릭 방식의 배열 타입 지정
let boolean: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 점진적 타입 시스템 => TS는 초기값을 확인하여 변수의 타입을 추론한다
// 배열의 요소들은 | 유니온 타입으로 지정해주고 이후 배열을 나타낸다
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 => 길이와 타입이 고정된 배열 타입, JS에는 없고 TS에만 있는 type
let tup1: [number, number] = [1, 2];
let tup2: [string, number, Boolean] = ["hello", 2, false];
// tup1 = ['thdud', 3]; 배열 안에 문자열값이 들어갈 수 없다.

// 인덱스별로 넣어야 하는 type의 값을 지정해야 할 때 유용하게 사용할 수 있다 
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "조아무개"], // 오류 발생
];
