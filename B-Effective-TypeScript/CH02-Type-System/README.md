# Effective-TS-CHAPTER02-타입스크립트의 타입 시스템

[:memo: effective-main][ effective-main ] 메인으로 가기

[effective-main]: /B-Effective-TypeScript

<br>

## 💙아이템06) 편집기를 사용하여 타입 시스템 탐색하기

- 편집기에서 타입스크립트 언어 서비스를 적극 활용하자
- 편집기를 사용하면 타입시스템의 동작이나 타입 추론의 개념을 잡을 수 있다.
- 타입스크립트가 어떻게 동작을 모델링하는지 알기 위해서는 타입 선언 파일을 찾아보면 좋다.
  <br>

## 💙아이템07) 타입이 값들의 집합이라고 생각하기

### 타입은 값들의 집합이다. 타입의 관계를 집합으로 나타내면 쉽게 이해할 수 있다.

- 서브타입과 슈퍼타입의 관계를 정의할 수 있다. <br>
  A를 B에 상속, A는 B에 할당 가능, B는 A에 할당 불가능, <br>
  A는 B의 서브타입 등과 같은 관계에 타입을 대입하여 이해할 수 있다.
- union(교집합)과 intersection(합집합)의 타입 연산을 할 수 있다.
- 타입을 집합으로 표현함으로써 중복되는 타입 선언을 줄일 수 있게 된다.

### 타입들 간의 집합관계를 나타낼 수 있는 용어들

- never : 가장 작은 집합, 아무 값도 포함하지 않는 공집합이다
- literal (unit) : 한 가지 값만 포함하는 타입
- union : 두 가지 이상의 타입을 | 기로호 묶어 사용하는 타입 = 합집합을 의미
- intersection : 두 타입의 교집합을 &로 묶어 사용한다
- extends : 부분집합의 의미로 상속관계를 구현할 수 있다.

```jsx
let list: number[] = [1,2]
let tuple: [number, number] = [1, 2]

// tuple = list
list = tuple
tuple = list as [number, number]
/**
 list는 number[] 타입으로 tuple의 [number, number]를 받아들일 수 있다
하지만 tuple은 list보다 좁은 범위의 계층에 속하기 때문에 list의 값을 받을 수 없다.
 대신 as로 타입 단언하면 tuple에 들어가는 list가 tuple의 타입이라고 지정하는 것이므로 가능하다.
 */
```

<br>

## 💙아이템08) 타입 공간과 값 공간의 심벌 구분하기

- 코드에서 타입이 쓰이는 부분과 값이 쓰이는 부분을 구별할 수 있어야 한다.<br>
  모든 값은 타입을 가지지만, type이나 interface 키워드는 타입 공간에만 존재한다.
- 타입과 값의 혼동으로 에러가 발생하기 쉬운 예는<br>
  instanceof 연산자를 사용하여 타입을 체크하려고 하는 때이다. <br>
  instanceof는 JS의 런타임 시에 사용되는 키워드이기 때문에 타입을 체크를 할 수 없어 에러가 발생한다.

### Type

- type, interface 뒤에
- 타입선언 ( : ) 또는 타입 단언 ( as ) 뒤에
- typeof는 값을 읽어서 타입을 반환한다.

### value

- const, let 뒤에
- 할당연산자 ( = ) 뒤에
- typeof는 런타임시 typeof 연산자가 되어 대상의 런타임 타입을 가리킨다
  <br>
  <br>

## 💙아이템09) 타입 단언보다는 타입 선언을 사용하기

TS가 타입을 선언하는 방식은 타입 선언과 타입 단언의 2가지이다. <br>
타입 단언은 강제성이 있기 때문에 타입체커가 정확하게 이루어 지지 않을 수 있다. 꼭 필요한 곳에만 사용하도록 한다

```jsx
interface Person { name: string };

// 타입 선언 : 타입 선언은 할당되는 값의 타입이 만족하는지 검사한다
const alice: Person = {};

// 타입 단언 : 강제로 타입을 지정하여 타입 체크 시 오류를 무시하게 된다
const bob = {} as Person;  // No error
```

<br>

## 💙아이템11) 잉여 속성 체크와 한계 인지하기

### 잉여 속성 체크

- 객체 리터럴에서 정의된 타입에 없는 속성이 있는지 체크하는 기능
- 컴파일 시 코드의 안정성을 높이고, 오류를 방지한다
- 잉여 속성 체크는 오류를 찾는 효과적인 방법이지만 한계점이 있다

### 잉여 속성 체크의 한계

- 객체 리터럴에서만 타입을 체크할 수 있다는 한계
- 임시 변수를 사용하여 할당하는 경우에 타입 체크를 놓칠 수 있음
  ( 할당 가능성 체크와는 별도로 동작하기 때문에. )

### 할당가능검사

- 객체를 다른 변수에 할당할 때, 두 타입 간의 구조적 타이핑을 비교하여 할당이 가능한지 확인하는 기능
- TS가 구조적 타이핑을 따르기 때문에 room타입을 가진 r2에 obj를 할당하여도 에러가 발생하지 않는다.<br>
  obj와 room의 객체 구조가 비슷하기 때문에 할당이 가능한 것이다.<br>
  obj의 타입을 정확히 명시하였다면 할당 하기 전에 이미 에러가 발생했을 것

  ```jsx
  interface Room {
    numDoors: number;
    ceilingHeightFt: number;
  }
  const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: "present", // 잉여 속성 체크를 통해 에러를 발생함
  };
  const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: "present",
  };
  const r2: Room = obj; // OK
  // 할당 가능 검사를 통해서 두 객체의 타입간의 구조적 타이핑 관계를 살펴보고
  // 객체를 할당할 수 있도록 함
  ```

    <br>

## 💙아이템12) 함수 표현식에 타입 적용하기

- 매개변수와 반환값에 타입을 지정하기 보다는 함수 표현식 전체에 타입 구문을 적용하길!
- 반복되는 함수 시그니처에 대한 타입을 만들어 사용하는 것도 좋은 방법이다 ( 반복의 최소화 )

```jsx
// 매개변수와 반환값에 타입을 지정하기 보다는 함수 표현식에 타입을 지정해 사용하라
function add(a: number, b: number) { return a + b; }
const rollDice = (side:number): number => { ... }

// 함수 구문 자체를 타입으로 만들어 지정하라.
// 이때 반복되는 함수 시그니처가 있다면 더욱 유용하게 사용할 수 있다.
type BinaryFn = (a: number, b: number) => number;
const add2: BinaryFn = (a, b) => a + b;
const sub2: BinaryFn = (a, b) => a - b;
```

<br>

## 💙아이템13) type과 interface의 차이점 알기

타입을 정의하는 방법으로는 type, interface 두 가지가 있다.

### < type, interface의 비슷한 점 >

- 인덱스 시그니처를 사용할 수 있다. (key:value의 규칙을 기준으로 객체의 타입을 정하는 것)
- 함수 타입을 정의할 수 있다
- 제너릭 사용이 가능하다
- 타입을 확장할 수 있다 ( interface는 extends, union 확장은 어려움 / type은 &, | 로 확장 가능 )
  ```jsx
  // 비슷한점 1 ) 인덱스 시그니처 사용
  type TDict = { [key: string]: string };
  interface IDict {
    [key: string]: string;
  }

  // 비슷한점 2) 함수 타입 정의 가능
  type TFn = (x: number) => string;
  interface IFn {
    (x: number): string;
  }
  const toStrT: TFn = (x) => "" + x; // OK
  const toStrI: IFn = (x) => "" + x; // OK

  // 비슷한 점 3 ) 확장이 가능하다,
  interface IStateWithPop extends TState {
    population: number;
  }
  type TStateWithPop = IState & { population: number };

  // 비슷한 점 4 ) 클래스를 구현할 수 있다

  // 제네릭 사용이 가능하다
  type TPair<T> = {
    first: T,
    second: T,
  };
  interface IPair<T> {
    first: T;
    second: T;
  }
  ```

### < type, interface의 다른 점 >

- type은 유니온이 가능하다, 인터페이스는 유니온은 안된다.
- interface는 선언을 병합할 수 있다. interface로 중복 선언을 하게 되면 두 type이 합쳐진다
  ```jsx
  interface Person {
    name: string;
  }

  interface Person {
    // ✅
    age: number;
  }

  const person: Person = {
    name: "소영",
    age: 20,
  };
  ```
  <br>

## 💙아이템14) 타입 연산과 제너릭 사용으로 반복 줄이기

### 반복되는 시그니처의 타입에 이름을 붙여 타입 분리하기

```jsx
interface Options {}

function get(url: string, opts: Options): Promise<Response> {
	return Promise.resolve(new Response());
}

function post(url: string, opts: Options): Promise<Response> {
	return Promise.resolve(new Response());
}

// 반복되는 함수 시그니처 분리
type HTTPFunction = { url: srting, opts: string} => Promise<Response>;
const get: HTTPFunction = (url, opts) => { // }
const post: HTTPFunction = (url, opts) => { // }
```

### 한 인터페이스가 다른 인터페이스를 확장(extends) 하여 사용하기

```jsx
interface Person {
  firstName: string;
  lastName: string;
}

interface PersonWithBirthDate extends Person {
  birth: Date;
}
```

### 매핑된 타입으로 중복 제거하기

배열의 필드를 반복적으로 도는 것과 같은 방식으로 타입을 생성한다

```jsx
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
type TopNavState = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
};

// Pick은 제너릭 타입으로, T와 K의 두 타입을 받아서 결과 타입을 반환한다.
type Pick <T,K> = { [k in K]: T[k] }
```
