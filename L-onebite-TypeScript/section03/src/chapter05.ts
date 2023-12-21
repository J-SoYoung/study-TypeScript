/**
 * 타입 좁히기
 * 조건문 등을 통해 넓은 타입에서 좁은 타입으로
 * 상황에 따라 타입을 좁히는 방법!!!!!
 */

function func(value: string | number | Date | null) {
  // value;           // type은 union타입으로 string|number가 된다
  // value.toFixed(); // string|number이기 때문에 아래 두 메서드는 해당이 X
  // value.toUpperCase();

  // 타입을 좁혀서 메서드를 적용해줘야 한다.
  // 타입가드: if (typeof === …) 처럼 조건문과 함께 사용해 타입을 좁히는 표현
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // } else if (typeof value === "object") {
    // typeof를 사용한 value값이 object|null 일 수 있다.
    // instaceof를 사용하자.
    console.log(value.getTime());
  }
}

/**
 * 타입가드
 * if (typeof === …)
 * instanceof
 * in
 */

// instaceof 타입 가드
// 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산입니다.
type Person = {
  name: string;
  age: number;
};

function func2(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // Date는 JS의 내장 클래스(객체)이기 때문에 instaceof 사용가능
    console.log(value.getTime());
    // } else if ( value instanceof Person){
    // Person은 내장 객체가 아닌 type이기 때문에 instaceof 사용 불가
  }
}

// in 타입 가드
function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value 값 안에 age프로퍼티가 있는지 확인할 수 있다.
    // 이때 value는 null이 되면 안되기 때문에 && 연산자를 사용해주고 in을 사용
    console.log(`value의 age는 ${value.age}`);
  }
}

let person: Person = {
  name: "소영",
  age: 3,
};

func3(person);
