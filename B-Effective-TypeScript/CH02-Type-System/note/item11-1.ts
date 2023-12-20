/**
 * 잉여 속성 체크의 한계
 */

interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  // elephant: 'present',
// ~~~~~~~~~~~~~~~~~~ Object literal may only specify known properties,
//                    and 'elephant' does not exist in type 'Room'
//                    잉여 속성 체크를 통해 에러를 발생함
};
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
};
const r2: Room = obj;  // OK
// 할당 가능 검사를 통해서 두 객체의 타입간의 구조적 타이핑 관계를 살펴보고 
// 객체를 할당할 수 있도록 함
