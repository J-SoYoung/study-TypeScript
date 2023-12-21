/**
 * 프로미스 객체에 타입 정의하기
 */

// TS는 프로미스의 결과값의 타입을 자동으로 추론하는 기능이 업다.
// type : unknown으로 설정돼있음 => 제네릭으로 해결 가능
// Promise 결과값의 타입이 제네릭으로 설정돼있기 때문에 
// 비동기 타입의 결과값(resolve)을 promise에 직접적으로 명시해 주면 타입 추론이 가능하다
// reject에는 타입 선언이 불가하기 때문에 typeof 연산자의 도움을 받아 타입을 좁혀서 사용한다
const promise = new Promise<number>((resolve, reject)=>{
  setTimeout(()=>{
    // resolve(20)
    reject('---실패했따.')
  }, 3000)
});

promise.then((response)=>{
  console.log(response * 10)
})

promise.catch((err)=>{
  if(typeof err ==='string'){
    console.log(err)
  }
})

/**
 * 프로미스 반환 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}


// promise함수 자체의 반환값을 명시해준다. 
function fetchPost(): Promise<Post>{
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve({
        id:1,
        title:'드디어끝났따',
        content:'드디어끝났다다'
      });
    }, 3000)
  })
}

const postRequest = fetchPost()
postRequest.then((post)=> {
  post.id
})