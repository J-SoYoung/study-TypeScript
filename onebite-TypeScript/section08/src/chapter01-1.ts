/**
 * 인덱스드 엑세스 타입
 * 객체, 배열, 튜플 타입으로부터 특정 프로퍼티나 특정 요소의 타입만 추출하는 
 * 인덱스를 이용해 특정 타입에 접근한다고 하여 붙여진 이름
 * 큰 타입에서 잘게 쪼개 타입을 지정해 사용할 수 있는 유용한 방법
 */

// 객체 형태의 인덱스트 엑세스 타입  
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    location: string;
  };
}

/**
  * 인덱스트 엑세스 타입 Post전체 타입에서 
    author의 프로퍼티만 떼어서 사용할 수 있게 함
    매개변수에 타입을 지정하고 [ ` ` ] 대괄호 안에 ` `를 넣어 프로퍼티 명을 써준다
  * 인덱스에는 값이 아닌 타입을 작성해줘야 한다 
 */
function printAuthorInfo(author: Post[`author`]) {
  console.log(`${author.id} - ${author.name}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    location: "인천"
  },
};

printAuthorInfo(post.author)