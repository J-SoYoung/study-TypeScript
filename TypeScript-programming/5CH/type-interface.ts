/**
  interface로 타입을 확장할 때
  타입간의 상위 인터페이스를 할당할 수 있는지 확인한다. 
  interface B는 A를 상속받지 못한다 => Erorr 발생
  */ 

interface A {
  good (x:number) : string
  bad ( x:number) : string
}

// Error
// interface B extends A {
//   good (x:string | number) : string
//   bad (x:string) :string
// }

/**
  type 별칭으로 타입을 정의하게 되면, 
  타입을 최대한 조합하는 방향으로 동작하기 때문에 
  bad를 오버로드한 시그니처가 생성된다 
 */
type C = {
  good (x:number) : string
  bad ( x:number) : string
}

type D = C & { 
  good (x:string | number) : string
  bad (x:string) :string
}