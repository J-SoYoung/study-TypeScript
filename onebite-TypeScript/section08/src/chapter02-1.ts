/**
 * keyof 연산자
 * 객체 타입으로부터 해당 타입 내에 정의된 프로퍼티의 키들을 유니온 타입으로 추출하는 키오브 타입
 */

interface Person {
  name : string;
  age : number;
}
// 객체 타입의 프로퍼티 키를 유니온 타입으로 추출할 수 있다.
// "name" | "age" 
// keyof는 타입에만 사용한다. 
function getPersonKey ( person: Person, key: keyof Person ){
  return person[key]
}

const person : Person = {
  name : "정소영",
  age : 31
}

getPersonKey(person, 'name')
