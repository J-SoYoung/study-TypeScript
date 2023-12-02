interface Vector2D {
  x: number;
  y: number;
}
interface NamedVector {
  name: string;
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  console.log(v);
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

const v:NamedVector = { x: 3, y: 4, name: "thdud" };
console.log(calculateLength(v));
/**
  const v의 타입을 NamedVector로 설정, 
  calculateLength의 매개변수의 타입은 Vector2D로 설정하였다. 
  calculateLength함수에는 namedVector의 타입을 가진 v를 인수로 넣었는데,

  NamedVector와 Vector2D의 타입 관계를 정의하지도 않았는데 
  함수의 실행에서 Error가 발생하지 않았다. 

  section03, chapter01
  NamedVector의 type과 Vector2의 type이 호환되기 때문에 
  구조적 타이핑의 관점에서 보았을 때, 에러가 발생하지않은 것이다.  

  <객체 타입의 호환성>
 * 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가? ㅇㅇ
 * 객체는 더 적은 프로퍼티를 가지고 있는 type(Vector2D)이 상위type이 된다.
 * 타입의 구조가 (부분적으로)일치하므로 구조적 타이핑의 관점으로 
 * 두 타입은 호환되어 NamedVector타입이 Vector2D타입으로 취급됨.
 */
