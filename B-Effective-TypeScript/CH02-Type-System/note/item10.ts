/**
 * 객체 래퍼 타입 피하기
  JS의 기본타입은 메서드를 가질 수 없지만 래퍼 객체를 통해 
  해당 기본타입에 메서드를 사용할 수 있도록 도와준다.
  TS에서는 기본 타입과 래퍼 객체의 타입을 따로 설정하고 있는데
  기본 타입을 사용하는 것을 권하고 있다.
 */

// 기본형 타입 
const str: string = 'Hello';

// 래퍼 객체 타입
const strObject: String = new String('Hello');
