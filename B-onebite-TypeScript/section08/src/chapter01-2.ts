/**
 * 인덱스드 엑세스 타입 < 배열 >
 */

// interface는 객체에 특화돼있으므로, type으로 바꿔 사용
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    location: string;
  };
}[];

/**
  PostList의 타입은 배열이고, 그 안에서 하나의 프로퍼티만 가지고온다. 
  그 중에서도 author의 데이터만 가지고 온다 !!! 
  인덱스를 두번 사용하여 배열안의 요소의 author프로퍼티의 타입만 참조가능
 */
function printAuthorInfo(author: PostList[number][`author`]) {
  console.log(`${author.id} - ${author.name}`);
}

// 배열 인덱스에서 요소만 추출해 온다는 뜻 
// 변수는 PostList의 배열 타입에서 객체 요소 하나만 가지고오는 타입이다 
// 주의 ! 배열 타입의 인덱스에 들어가는 것은 타입이다
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    location: "인천"
  },
};

printAuthorInfo(post.author)