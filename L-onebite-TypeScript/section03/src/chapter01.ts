/**
 * 기본 타입간의 호환성
 * 특정 타입을 다른 타입으로 취급해도 괜찮은가 하는 문제
 * 타입 계층도를 통해 업캐스팅, 다운캐스팅 하는 관계를 살펴봄
 */
let num1: number = 10; // type: number
let num2: 10 = 10; // type: literal or enum

num1 = num2; // ✅ OK num1타입이 num2타입보다 슈퍼타입이기 때문에 업캐스팅이라 가능
// num2 = num1; // ❌ NO 다운캐스팅이라 불가

/**
 * 객체 타입의 호환성
 * 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 * Animal type은 Dog type의 상위type이다.
 * 객체는 더 적은 프로퍼티를 가지고 있는 type이 상위type이 된다
 * 프로퍼티를 기준으로 설정되는(구조적 타입시스텝) 객체 타입의 값을 살펴봄.
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // ✅ OK
// dog = animal; // ❌ NO

// -------------------------
type Book = {
  // 슈퍼타입
  name: string;
  price: number;
};

type ProgrammingBook = {
  // 서브타입
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한입리액트",
  price: 30000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book // Error
