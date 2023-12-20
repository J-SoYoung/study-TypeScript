interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  console.log(v);
  console.log(v.x * v.x + v.y * v.y);
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  console.log("length-", length );
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}
console.log(normalize({ x: 3, y: 4, z: 5 }));

/**
 normalize함수의 매개변수v의 타입은 Vector3이고, 
 nor함수 안의 calculationLength함수가 호출이된다.
 호출된 cal함수의 매개변수의 타입은 Vector2다. 
 
 Vector3과 Vector2의 매개변수의 개수는 다르지만 
 서로 타입이 같고, x와 y가 구조적으로 겹치기 때문에 에러가 발생하지 않고 호환되었다  
 하지만 이런 경우 에러를 체크해주는 편이 더 정확한 코드가 될 수 있다 
 ( * item 27에서 추가로 에러 체크하는 법 나옴 )
  */
