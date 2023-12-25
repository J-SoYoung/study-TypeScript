# Effective-TS-CHAPTER03-타입추론

[:memo: effective-main][ effective-main ] 메인으로 가기

[effective-main]: /B-Effective-TypeScript

- TS가 타입을 어떻게 추론하는지 알 수 있다
- 언제 타입을 선언을 작성해야 하는지 알 수 있다
- 타입 추론이 가능해도 명시적으로 작성해 줘야 하는 때는 언제인지 알 수 있다
  <br>

## 🍋아이템19) 추론 가능한 타입을 사용해 장황한 코드 방지하기<br>

TS는 타입을 자동으로 추론하기 때문에 변수를 선언할 때마다 타입을 지정할 필요는 없다.
비구조화 할당문을 사용하여 모든 지역변수의 타입이 추론되도록 하자. 타입이 자동 추론되는 부분에서 명시적으로 타입을 선언하게 된다면 오히려 코드가 번잡스러워진다.

- 명시적 타입 구문이 필요한 경우는, 정보가 부족해서 TS가 스스로 타입을 판단하기 어려운 경우에 필요하다.

```jsx
interface Product {
  id: string;
  name: string;
  price: number;
}
// 비구조화 할당문을 사용하면 모든 지역변수의 타입이 추론된다.
function logProduct(product: Product) {
  const { id, name, price } = product;
  console.log(id, name, price);
}
```

## 🍋아이템21) 타입 넓히기 ( 타입 넓히기 제어 )<br>

- 타입넓히기? <br>
  변수를 초기화 할 때 타입이 명시돼 있지 않으면 TS는 지정된 값을 가지고 할당 가능한 타입들을 유추해야 한다. 이러한 과정을 타입 넓히기라고 한다.

```jsx
const mixed = ['x', 1]

  // TS는 아래와 같이 타입을 유추한다
  ('x'| 1 )[]
  ['x', 1 ]
  [string, number]
  readonly [string, number]
  (string | number)[]
  readonly (string | number)[]
  [any, any]
  any[]
```

## 🍋아이템22) 타입 좁히기<br>

- 타입 좁히기? 여러 경우의 수를 가진 type중에서 적은 경우의 수를 가지는 타입으로 재정의 하는 것
- 조건문을 사용한다 ( ex, instanceof ), 조건문으로 타입을 좁힐 때는 변수,함수가 가지고 있는 타입을 정확이 판단한 후 사용해야 한다.
  ( null의 타입은 object이다, “”, 0은 false가 된다. 이런 예외적인 값들까지 체크해야 한다 )
- 명시적 태그 붙이기 ( 태그된 유니온 tagged Union, 서로소 유니온 타입 )
- 사용자 정의 타입 가드

## 🍋아이템26) 타입 추론에 문맥이 어떻게 사용되는지 이해하기<br>

TS의 타입 추론이 모든 상황에 맞아떨어지는 것은 아니다. |
문맥에서 변수를 별도로 만들어 함수를 호출하려고 할 때, 변수에 정확한 타입을 명시해야 TS가 정확한 추론을 할 수 있다. (1)타입을 명확하게 정의하거나 (2) as const 단언문을 사용하거나 (3) 상수로 const로 정의하면 된다.

```jsx
type Language2 = "JavaScript" | "TypeScript" | "Python";
function setLanguage(language: Language2) {
  /* ... */
}

// language1 인수는 string에 할당할 수 없다
let language1 = "JavaScript";
setLanguage(language1);

// 정확한 타입을 지정해줘야 한다
let language2: Language2 = "JavaScript";
setLanguage(language2);

// 혹은 language를 const 상수로 지정해도 된다.
const language3 = "JavaScript";
setLanguage(language3);
```
