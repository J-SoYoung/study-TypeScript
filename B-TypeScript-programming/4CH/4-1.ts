// JS에서는 이상이 없는 코드 
// TS로 가면 함수에 매개변수가 없으므로 TypeError를 발생시킨다.
/**
  function sumVariadic() {
    console.log(arguments)
    return Array
    .from(arguments)  
    .reduce((total, n)=> total+n , 0)
  }
  console.log(  sumVariadic(1,2,3))
*/

/*
sumVariadiDafec함수에 넣은 매개변수들을 
...을 사용하여 나머지 매개변수로 받아 number[]타입을 넣어주었다. 
*/
function sumVariadiDafec(...numbers : number[]) :number {
  return Array
  .from(arguments)  
  .reduce((total, n)=> total+n , 0)
}

sumVariadiDafec(1,2,3)
console.log(sumVariadiDafec(1,2,3))

