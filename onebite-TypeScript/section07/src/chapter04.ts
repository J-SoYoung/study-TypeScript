/**
 * 제네릭 인터페이스
  타입변수 = 타입 파라미터 = 제네릭 타입변수 = 제네릭 타입 파라미터
  하나의 인터페이스로 다양한 변수의 타입을 지정해 줄 수 있다. 
*/

// 제네릭으로 인터페이스를 만들게 되면 이름 옆에 타입변수를 작성해줘야 한다. 
interface KeyPair< K , V >{
  key: K;
  value: V;
}

// 이후 제네릭 인터페이스를 적용하려면 해당 변수 타입 옆에 < 각 타입변수의 타입을 지정 > 해줘야 한다 
let keyPair : KeyPair <string, number> = {
  key: 'key',
  value: 0
}

let keyPair2: KeyPair < boolean, string[] > = {
  key: false,
  value : ['thdud','hello']
}


/** 
 * 제네릭 타입 별칭 
 */

// key는 sting이고 value는 아직 타입이 정해지지 않음
type map <V> = {
  [key : string] : V
}

let stringMap:map<string> = {
  key : 'value'
}
let stringMap2:map <number> = {
  key : 111
}

/**
 * 제너릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 / 개발자 
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

// type을 나눠야 할 때, 제네릭으로 두면 함수에서 타입좁히기를 하지 않아도 제네릭 타입을 설정해주면 된다. 
interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user:User<Student>){
  // 함수가 생길 때마다 조건문으로 타입을 지정해 좁혀줘야 한다. 
  // // -> 번거롭다. 이럴때 제네릭문법을 사용해 타입을 지정해주면 좋다 

  // if문으로 타입을 좁혀주지 않아도 된다 
  // if(user.profile.type !== 'student'){
  //   console.log('잘못오셨습니다')
  //   return
  // }

  const name = user.name
  const school = user.profile.school
  console.log(`${name}님이 ${school}로 등교했습니다. `)
}


const developerUser : User<Developer> ={
  name: '소영',
  profile: {
    type : 'developer',
    skill: 'Typescript'
  }
}
const studentUser : User<Student> ={
  name: '소영2',
  profile: {
    type: "student",
    school: '인천대학교'
  }
}

goToSchool(studentUser)
// goToSchool(developerUser) // 이미 제네릭 타입을 사용해 함수에 Student의 타입을 가진 객체만 들어올 수 있도록 함