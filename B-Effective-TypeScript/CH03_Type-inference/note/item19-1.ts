/**
 * itme19 / TS가 추론이 가능하다면 굳이 타입을 지정하지 않아도 된다
 */

// 자동 타입 추론
function square(nums: number[]) {
  return nums.map(x => x * x);
}
const squares = square([1, 2, 3, 4]); // Type is number[]


interface Product {
  id: string;
  name: string;
  price: number;
}

//////////////////////////////////////////////////////
// 타입 추론이 가능한 경우 굳이 명시적으로 타입 지정X
// 코드가 번잡해진다.
function logProduct(product: Product) {
  // const id: number = product.id;
  // const name: string = product.name;
  // const price: number = product.price;
  // console.log(id, name, price);
}

// 비구조화 할당문을 사용해 구현하는 것이 낫다.
// 모든 지역 변수의 타입이 추론되도록 한다.
function logProduct2(product: Product) {
  const {id, name, price} = product;
  console.log(id, name, price);
}