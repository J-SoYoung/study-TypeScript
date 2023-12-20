/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

// person객체의 타입은 Person인데, 초기값이 비어있기 때문에 Error발생
// 이럴 때에는 타입 단언을 통해 person객체의 타입이 Person임을 지정해줘야 한다.
// let person: Person = {}; // 초기값이 비어있어 Error
let person = {} as Person;
person.name = "";
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

// 초과 프로퍼티가 있기 때문에 Error가 나지만 타입 단언으로 문제 해결 가능
let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "말티즈",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 = A as B
 * A가 B의 슈퍼 타입이거나
 * A가 B의 서브 타입이어야 함, 서로 겹치는 부분이 있어야 단언할 수 있다
 */

let num1 = 10 as never; // ✅
let num2 = 10 as unknown; // ✅
// let num3 = 10 as string;  // ❌ string과 number가 겹치는 부분이 X

/**
 * const 단언
 * const 타입으로 단언하면 마치 변수를 const로 선언한 것과 비슷하게 타입이 변경
 */

// 10 Number Literal 타입으로 단언됨
let num4 = 10 as const;

// 모든 프로퍼티가 readonly를 갖도록 단언됨
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 * 값 뒤에 느낌표(!) 를 붙여주면
 * 이 값이 undefined이거나 null이 아닐것으로 단언할 수 있다
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "정소영",
};

const len: number = post.author!.length;
console.log(len);
// 타입 단언은 TS컴파일러의 눈을 잠깐 가리는 용도이지
// 진짜 타입을 변환하는 것은 아니다. 그렇기 때문에 확실한 경우에만 사용하자!
