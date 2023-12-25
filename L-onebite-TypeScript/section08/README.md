# 한입 타입스크립트 강의

### section08\_타입 조적하기

타입도 다양한 연산을 통해 정의할 수 있다. section8은 TypeScript의 고급 문법에 대한 내용이다.

- 인덱스드 엑세스 타입 : 인덱스를 이용해 특정 프로퍼티 타입을 추출하는 방법으로,
  아래 예시로는 Post타입의 author키를 가지고 있는 타입을 추출한다는 이야기다.

```
type User = {
  id: number;
  name: string;
}
type U1 = User["id"] // number
```

- keyof 연산자 : 특정 객체 타입으로부터 key를 유니온 타입으로 추출하는 타입

```
type User = {
  id: number;
  name: string;
}
type UserKeys = keyof User; // "id" | "name"
```

- typeof 연산자 : 데이터 타입을 반환하는 연산자
- mapped type : 객체 타입을 기반으로 새로운 객체타입을 만든다
``` 
  // mapped type syntax
  { [ P in K ] : T }
```
