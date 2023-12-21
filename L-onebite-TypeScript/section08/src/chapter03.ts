/**
 * Mapped맵드 타입
 * 자바스크립트의 맵 함수처럼 기존의 객체 타입을 기반으로 새로운 객체 타입을 만든다. => 실무에서 굉장히 사용성이 높다 
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드타입 (1) => 선택적 프로퍼티로 바꾸기 
/**
  * User타입을 Mapped type을 사용해 User 타입의 속성을 선택적으로 만든 타입이다
  * key in "id" ... 각 키에 대한 반복을 나타냄
  * User[key] 는 각 키에 해당하는 User의 타입 속성을 가져온다. 
  key in으로 partialUser의 새로운 키캆을 만들고, 
  User[key]는 User타입에서 해당 key값의 타입을 가져온다는 이야기
 */
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

// 맵드타입 (2) => 모든 타입을 boolean으로 바꾸기
type BooleanlUser = {
  [key in keyof User]?: boolean;
};

// 맵드타입 (3) => 모든 user 속성에 realonly속성을 넣자
type ReadonlyUser = {
  readonly [ key in keyof User ] : User[key]
}

// ... 유저 정보 불러오는 기능
function fetchUser ():User {
  return {
    id: 1,
    name: 'thdud',
    age: 31
  }
}

// ... 유저 정보 수정 기능
// function updateUser(user: User) {
function updateUser(user: PartialUser) {
  console.log(user)
}

// ... 유저 정보 수정 기능
function updateUser2(user: BooleanlUser) {
  console.log(user)
}

const user : User = {
  id: 1,
  name: 'thdud',
  age : 31
}
// 나이만 수정하고 싶을 때, 하나의 프로퍼티만 요청할 수 없다. 
// 새로운 타입 생성해야 함 
// updateUser({ age: 25 }); 

// 기존에 있었던 User프로퍼티를 선택적 프로퍼티로 바꿔줘야 한다 
// Mapped타입 => 기존에 있는 객체타입을 기반으로 새로운 객체타입 생성

  updateUser({ age : 25 })
  updateUser2({ age : true })


