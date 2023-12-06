/**
 * mapped type 기반 utility type
 *  => Required<T> !!!!!!!!!
    특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Required<T> = {
  [ key in keyof T ]-? : T[key] 
}
// -? 선택적 프로퍼티 속성을 빼겠다는 의미 
// = 프로퍼티가 모두 필수적이어야 한다는 뜻

const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
  // 모든 프로퍼티를 필수적으로 넣어야 한다
};

/**
 * Readonly 프로퍼티
 * 읽기 전용, 수정 불가
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입이다
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// readonly프로퍼티 구현, 유틸리티 타입으로도 사용 가능
type Readonly<T> = {
  readonly [ key in keyof T] : T[key]
} 

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};


// readonlyPost.content = '해킹당함'; // 수정불가 프로퍼티로 변함 