interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;
function calculateArea(shape: Shape) {

	// if (shape instanceof Rectangle) {
	// instanceof는 객체가 특정 클래스에 속하는지의 확인 여부 연산자다.
	// Rectangle은 타입을 지정하고 있으므로 런타임 시 Error가 발생한다. 
 
  if ('height' in shape) {
	// in 은 객체의 속성 존재 여부를 확인하는 연산자다.
    shape;  // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape;  // Type is Square
    return shape.width * shape.width;
  }
}