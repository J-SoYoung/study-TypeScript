/**
 * 인터페이스
 * 타입 별칭과 동일하게 타입에 이름을 지어주는 문법
 * 상속, 합침 등의 특수 한 기능을 제공하여 객체의 구조를 정의하기 좋다
 */

interface Person {
  name: string;
  age: number;
  sayHi(): void;
}

const person: Person = {
  name: "정소영",
  age: 20,
  sayHi: function () {
    console.log("hello");
  },
};

console.log(person);
