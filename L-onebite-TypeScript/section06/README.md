# 한입 타입스크립트 강의

### section06_class

- 클래스는 동일한 모양의 객체를 생성할 수 있도록 도와주는 JS문법이다. 이러한 클래스를 TS에서 사용하기 위해서는 클래스 필드를 선언할 때 타입을 함께 정읳 ㅐ줘야 한다.
- TS의 클래스는 타입으로도 사용할 수 있다. 클래스를 타입으로 사용하면, 해당 클래스가 생성하는 객체의 타입과 동일한 타입이 된다.

```
class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position: string = "";

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}
```

- 클래스를 타입으로 정의해 사용한 예

````
class Employee {
  (...)
}

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};```
````
