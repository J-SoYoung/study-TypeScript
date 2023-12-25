# Effective-TS-CHAPTER05-any 다루기
- 타입스크립트의 타입 시스템은 선택적이고, 점진적이기 때문에 정적이면서도 동적인 특성을 동시에 가진다. 따라서 타입스크립트는 프로그램의 일부분에만 타입 시스템을 적용할 수 있다.
- 일부분에만 타입 시스템을 적용할 수 있기 때문에 점전적인 마이그레이션이 가능하다. 이때 마이그레이션 하는 일부분의 타입 체크를 비활성화 시켜주는 any의 역할이 중요하다

### 🍊아이템38) any는 가능한 좁은 범위에서 사용하기<br>
- any의 사용 범위는 최소한으로 좁혀서 사용해야 한다
- 함수의 반환 타입이 any인 경우에는 타입 안정성이 나빠진다. 함수 반환타입에는 any 사용 금지!

### 🍊아이템39) any를 구체적으로 변형해서 사용하기<br>
any는 TypeScript에서 매우 큰 범위의 타입이다. 
반대로 말하면 any보다 구체적으로 표현할 수 있는 타입이 존재할 가능성이 크다. 그렇기 때문에 더 구체적인 타입을 찾아 코드의 타입 안정성을 높여야 한다.
```jsx
// any보다 any[]이 조금 더 구체적인 타입이다.
// 매개변수로 배열을 체크하거나 length프로퍼티를 체크한다
function getLengthBad(array: any) {  // Don't do this!
  return array.length;
}

function getLength(array: any[]) {
  return array.length;
}
```

### 🍊아이템41) any의 진화를 이해하기<br>
변수의 타입은 변수를 선언할 때 결정된다. 이후 null 값을 체크해 정제 될 수는 있지만, 새로운 값이 추가되도록 확장할 수는 없다. 하지만 암시적 any, any[ ] 타입은 진화할 수 있다. 
any를 진화시키는 동작보다 명시적 타입구문을 사용하는 것이 안전한 타입을 유지하는 방법이다.
```jsx
function range(start: number, limit: number) {
  const out = []; // any[] 타입으로 추론됨 
  for (let i = start; i < limit; i++) {
    out.push(i);
  }
  return out;  // number[] 타입으로 추론됨 
}
```
### 🍊아이템42) 모르는타입의 값에는 any대신 unknown 사용하기<br>
- any : 어떠한 타입이든 any 타입에 할당이 가능하고/ 어떠한 타입으로도 할당 가능하다 
  ```jsx
  /** 어떠한 타입이든 any타입에 할당이 가능하다 */ 
  let anyVariable: any;
  anyVariable = 10;       // 숫자 할당
  anyVariable = 'Hello';  // 문자열 할당
  anyVariable = true;     // 불리언 할당

  /**  any타입은 어떠한 타입으로도 할당 가능하다 */
  // anyVariable은 any타입을 가지고 있는 변수인데 example이라는 number타입의 변수에 할당됐다. 
  let example: number = anyVariable;
  ```
- unknown : 어떠한 타입이든 unknown에 할당 가능하지만 / unknown과 any에만 할당 가능하다.<br>
- 이후 unknown값을 그대로 사용할 수 없기 때문에 다양한 방법으로 unknown의 타입을 좁혀야 한다. 
unknown은 어떠한 타입도 가질 수 없기 때문에, 사용자가 제공한 정보를 통해 TS가 타입을 추론해 unknown의 범위를 좁힌다. 
  ```jsx
  // 어떠한 타입이든 unknown에 할당 가능한 예시
  let value: unknown;

  value = 10; // 숫자 할당
  value = 'Hello'; // 문자열 할당
  value = true; // 불리언 할당

  // unknown은 자기 자신과 any에만 할당 가능
  let unknownValue: unknown;
  let anyValue: any;

  unknownValue = value; // 가능
  unknownValue = anyValue; // 가능

  // 하지만, 다른 타입에는 직접 할당할 수 없다.
  let numberValue: number;
  // numberValue = value; // 에러: Type 'unknown' is not assignable to type 'number'
  ```