/**
 * Omit < T, K >
 * 특정 프로퍼티를 제거하는 유틸리티 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 구현해보기
type Omit<T , K extends keyof T> = Pick <T, Exclude<keyof T, K>>

// title 프로퍼티만 제거해 타입을 생성한다  
const legacyPost: Omit<Post, 'title'> = {
  tags: ['thdud','hello'],
  // title : 'legacy content',
  content : 'legacy content',
  thumbnailURL: 'thdud picture'
}


/**
 * 레코드 타입 
 * 객체타입을 정의하는 데 사용됨
 * 동일한 타입의 객체 타입을 생성하는 데 유용핟 
 */

type LegacyThumbnail = {
  large:{
    url: string,
  },
  medium:{
    url: string,
  },
  small:{
    url: string,
  }
}

// 직접 구현하기
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail =  
Record <"large"|"medium"|"small"|"watch", { url : string, size:number } >
// Record의 첫번째 프로퍼티 키에는 객체의 키값을 union으로 받음
// 두번째 타입변수는 key의 value type을 받는다.

