/**
 * mapped type 기반 utility type
 *  => partial<T> !!!!!!!1
 *  => Required<T>
 *  => Readonly<T>
 */


/**
 * partial<t> 
 * 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Partial type 직접 구현하기
// 아래 draft는 utility의 Partial이 아니게 되고 아래 타입이 된다.
type Partial<T> = {
  [key in keyof T]?: T[key];
  /**
    제네럴 타입으로 <T>를 받아오고, Mapped type으로 타입 내용을 구현한다
    <T>의 정의
      mapped type : 데이터를 받아 하나씩 출력한 뒤, 유니온타입으로 지정
      keyof T => T의 데이터의 key값을 받아서 
      key in => in 연산자로 하나씩 나열해 key에 저장한다 
    vlaue 값의 정의
      인덱스드 엑세스 타입 : 특정 객체, 배열의 프로퍼티 타입을 추출함
      : T[key] => T에 해당하는 객체의 [key] 프로퍼티 값의 타입을 추출
    ? 모든 프로퍼티를 선택적 프로퍼티로 설정
   */
};



const draft: Partial<Post> = { 
  title: "제목은 나중에 짓자...",
  content: "초안...",
};
// 블로그 글의 자동저장 기능을 예시로 들어볼 수 있을 것 같다. 
// 자동저장은 모든 프로퍼티를 다 작성하지 않고도 가능해야 햐니까 
// utility의 Patial을 사용하면 Post의 프로퍼티가 모두 선택적 프로퍼티가 됨 


