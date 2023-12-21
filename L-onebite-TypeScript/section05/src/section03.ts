/**
 * 선언 합침
 * interface로 선언한 type은 중복선언을 하게 되면
 * 두 type이 합쳐진다.
 */

interface Person {
  name: string;
}

interface Person { // ✅
  age: number;
}

const person:Person = {
  name:'소영',
  age:20
}