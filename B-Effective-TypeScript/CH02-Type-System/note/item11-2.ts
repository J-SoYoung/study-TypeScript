interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
function setDarkMode() {}
interface Options {
  title: string;
  darkMode?: boolean;
}
function createWindow(options: Options) {
  if (options.darkMode) {
    setDarkMode();
  }
  // ...
}
createWindow({
  title: 'Spider Solitaire',
  darkMode: true
// ~~~~~~~~~~~~~ Object literal may only specify known properties, but
//               'darkmode' does not exist in type 'Options'.
//               Did you mean to write 'darkMode'?
});

const o1:Options = document
const o2:Options = new HTMLAnchorElement

// document와 HTMLAnchorElement는 sting타입인 title 속성을 가지고 있기 때문에 할당문은 정상이다. ( 할당 가능 검사 통과)
// 또한 document와 HTMLAnchorElement는 객체 리터럴이 아니기 때문에 잉여 속성 체크가 되지 않아 에러가 발생하지 않는다. ( 잉여 속성 체크 불가 )
