/**
 * 인터페이스 확장
 */

// 중복된 프로퍼티를 줄일 수 있다.
interface Animal {
  name: string;
  age: number;
}

// Dog type은 Animal type의 name, age를 가지고 isBark가 추가된 type이 된다
interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장 : 여러개의 type을 상속받아 사용할 수 있다 
interface DogCat extends Dog, Cat {}

const dog: Dog = {
  name: "왈왈이",
  age: 12,
  isBark: true,
};
const dogCat: DogCat = {
  name: "왈왈이",
  age: 12,
  isBark: true,
  isScratch: false,
};
