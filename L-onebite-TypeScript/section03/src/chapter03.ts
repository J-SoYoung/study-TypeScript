/**
 * 타입 추론
 */

// number 타입으로 추론
let a = 10;

// string 타입으로 추론
let b = "hello";

// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론
let c = {
  id: 1,
  name: "정소영",
  profile: {
    nickname: "thdud",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

// 함수의 return값을 기준으로 타입 추론 
// 매개변수에 기본값이 있다면 해당 값으로 추론 
function func(message = "thdud") {
  return "hello";
}

// const는 상수이기 때문에 하나밖에 값을 담지 못해서 literal타입으로 추론됨
// 10 Number Literal 타입으로 추론
const num = 10;

// "hello" String Literal 타입으로 추론
const str = "hello";

