/**
 * typeof연산자
 * 값에서 사용될 때와 타입에서 사용될 때 쓰임새가 다르다  
 * typeof는 JS(값에 사용)에서 특정 변수의 타입을 string으로 변환하는 연산자
  typeof person === 'object'
 */

type Person = typeof person
// person변수의 타입을 추론해서 Person에 타입을 작성해준다 
// 어떤 변수의 타입을 뽑아내는 용도로 사용 가능하다 

function getPersonKey ( person: Person, key: keyof typeof person ){
  // typeof person으로 person객체의 타입을 추론해 저장하고, 
  // typeof로 가져온 타입들을 keyof를 통해 유니온 화 시킨다.  
  return person[key]
}

const person = {
  name : "정소영",
  age : 31
}

getPersonKey(person, 'name')


