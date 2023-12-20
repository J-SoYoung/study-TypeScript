/**
 * generic 타입변수 응용 (1)
    주어진 매개변수들의 타입이 다를 때
 */

function swap < T, U > ( a: T, b: U ) {
  return [ b , a ]
}

// 매개변수 타입이 같으면 타입변수 T만 사용
const [a,b] = swap(1,2)

// 매개변수 타입이 같지 않으면 T,U 두개의 타입변수를 사용
// 타입변수 T에는 number type이 , U에는 stiring타입이 저장된다
const [c,d] = swap(1,'thdud')


/**
 * generic 타입변수 응용 (2)
    주어진 매개변수가 배열이고, 그 안의 타입을 확인하려 할 때
 */
function returnFirstValue<T>(data: [T, ...unknown[]]){
// function returnFirstValue<T>(data: T[]){
  return data[0]
}
let num = returnFirstValue([1,2,3])
let str = returnFirstValue(['hello','thdud' ])
let mix = returnFirstValue(['hello', 1 ])


/**
 * generic 타입변수 응용 (3)
 */
function getLength<T extends {length:number}> ( data: T ){
  // 타입 변수로 지정한 매개변수는 처음 unknow타입으로 봄.
  return data.length

  // getLength함수의 return값은 <T extends {length:number}> 
  // length 프로퍼티가 number타입을 갖는 T여야 한다.
}

let var1 = getLength([1,2,3])
let var2 = getLength('12345')
let var3 = getLength({length:10})
// let var4 = getLength(10) // lenght프로퍼티가 없어서 ERror