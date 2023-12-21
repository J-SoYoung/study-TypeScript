/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 기준
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 1. 반환값의 타입이 호환되는가
type A = () => number; // number
type B = () => 10;     // number literal 

let a: A = () => 10;
let b: B = () => 10;

a = b;    // ✅호환됨
// b = a; // ❌ 호환되지 않음, 다운캐스팅 되기 때문에 안된다. 


// 2-1. 매개변수의 타입이 호환되는가 ( 매개변수의 개수가 같을 때 )
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // ❌
/*
  상위 집합의 범위가 더 넓긴 하지만 세세한 프로퍼티 값까지 포함할 수 없기 때문에
  함수 매개변수를 기준으로 하는 호환성에 있어서는
  서브 타입에 슈퍼 타입을 할당하는 것은 가능하고 그 반대는 불가하다. 
  let animalFunc = (animal: Animal) => {
    console.log(animal.name);  // ✅
    console.log(animal.color); // ❌
  };
*/

dogFunc = animalFunc; // ✅


// 2-2. 매개변수의 타입이 호환되는가 ( 매개변수의 개수가 다를 때 )
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌