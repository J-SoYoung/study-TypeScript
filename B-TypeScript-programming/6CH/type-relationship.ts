type ExistingUser = {
  id:number;
  name: string;
}
type NewUser = {
  name: string;
}
type LegacyUser = {
  id?:number|string;
  name: string; 
}

function deleteUser (user: { id?:number, name:string}){
  delete user.id;
}


let newUser :NewUser = {
  name:'thdud'
}
let exitingUser: ExistingUser = {
  id:1234,
  name: 'Ima User'
}
let legacyUser:LegacyUser ={ 
  id:'11111',
  name:'thdudddf'
}

deleteUser(exitingUser)
deleteUser(newUser)     // 구조적 타입 시스템에 의해 PAss
// deleteUser(legacyUser)  // 타입에서는 호환성이 이루어져야 한다 Error, string과 number는 호환이 되지 않음
