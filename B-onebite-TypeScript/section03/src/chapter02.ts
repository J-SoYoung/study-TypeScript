/**
 * 대수타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합(Union)
 * -> 교집합(Intersection)
 */

// Union type (합집합)
let a: string | number;
a = 1;
a = "hello";

// 배열 안에서 Union타입 지정하기
let arr: (number | string | boolean)[] = [1, "hello", true];

// 타입 별칭을 사용하여 객체를 Union 타입으로 만들기
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};
let union2: Union1 = {
  name: "",
  language: "",
};
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};
// Dog와 Person 또는 교집합의 관계에 속하지 않기 때문에 Error
// let union4: Union1 = { // ❌
//   name: "",
// };

// Intersection type (교집합)

// 기본 타입의 intersection type은 never 타입으로 추론된다
let variable: number & string;

// 객체 타입
type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

// 두 타입의 프로퍼티를 모두 가지고 있는 객체여야 intersection type에 성립한다
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
