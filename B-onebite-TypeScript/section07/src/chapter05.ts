/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2"]);
// 클래스의 이름 뒤에 변수를 선언하면 제네릭 클래스가 된다.
// 클래스는 생성자를 통해 타입변수의 타입을 추론할 수 있기 때문에 
// 생성자에 인수를 전달하지 않아도 된다. ( 생략가능, 써도딤 )
// const numberList = new List<number>([1, 2, 3]);
// const stringList = new List<string>(["1", "2"]);