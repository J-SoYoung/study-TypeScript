/**
 * Pick < T, K >
 * 객테 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T , K extends keyof T> = {
  // Pick타입에 T,K를 타입변수를 받는데,
  // T는 타입 전체의 이름, K는 타입객체의 프로퍼티이다.
  // 이때 프로퍼티는 T에 속한 프로퍼티만 들어올 수 있도록 제약조건을 걸어야 한다
  // => key extends keyof T 가 그런 뜻임 
  // K가 T의 keyof T의 타입 key들을 포함하고 있다고 제한함. 
  [key in K] : T[K]
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: 'legacy title',
  content : 'legacy content'
}
// Pick타입을 사용하여 Post type에서 선택적으로 프로퍼티를 선택해 타입체크를 하고 있다.
// Post타입에서 title과 content만 있으면 되도록 type설정함
