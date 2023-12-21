/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // animal is Dog (함수 프레디케이트)
  // 함수가 true를 반환하면 TS는 호출 스코프에서 animal의 타입을 Dog로 좁힐 것임
  return (animal as Dog).isBark !== undefined;
}
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (!isCat(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}
let dog: Dog = {
  name: "왈왈이",
  isBark: true,
};
let cat: Cat = {
  name: "욘욘이",
  isScratch: false,
};
warning(dog);
warning(cat);
