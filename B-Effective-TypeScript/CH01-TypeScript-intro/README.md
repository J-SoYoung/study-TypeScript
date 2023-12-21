# Effective-TS-CHAPTER01-타입스크립트 알아보기

## 아이템01 TS와 JS관계 이해하기

- **TS는 JS의 상위집합(superset)이다.**
  모든 자바스크립트는 타입스크립트지만 모든 타입스크립트는 자바스크립트가 아닐 수 있다.
  tuple(길이와 타입이 고정된 배열의 타입), enum(열거형 타입)과 같은 타입은 자바스크립트에는 없다.
- TS는 JS의 런타임을 모델링 할 수 있다.
  TS는 컴파일을 수행 하면서 JS의 런타임 시 오류를 발생시킬 만한 코드와 타입을 체크한다.
  _JS의 런타임을 모델링한다? 런타임 동작을 따르면서 정적 타입을 체크한다는 뜻_<br>
  <br>

## 아이템02 TS설정 이해하기
tsconfig.json 파일에서 TS설정을 해주는 것이 좋다. section01

```jsx
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "outDir": "dist",
    "strict": true,
    "strictNullChecks": false,
		"noImplicitAny" : false,
    "moduleDetection": "force",
    "moduleResolution": "node"
  },
  "ts-node": {
    "esm": true
  },
  "include": ["src"]
}
```

- target : TS의 컴파일 결과를 JS어떤 버전으로 할 것인가 설정
- module : 컴파일된 코드의 모듈 형식을 지정 ( CommonJS, import/export )
- outDir : 컴파일 된 JS파일이 생성될 디렉토리를 지정
- strict : 모든 엄격한 타입 검사 옵션을 활성화
- noImplicitAny : 변수가 미리 정의된 타입을 가져야 하는지에 대한 여부 ( TS는 타입 정보를 가질 때 가장 효과적으로 사용할 수 있기 대문에 미리 설정해두는 것이 좋다, 기본은 true다. )
- strictNullChecks : Null과 undefined가 모든 타입에 허용되는지 확인하는 설정
- ts-node : TypeScript 파일을 실행하는 동안 사용되는 ts-node 설정
- include \*\*\*\*: 컴파일할 파일이나 디렉토리를 지정<br>
<br>

## 아이템03) 코드 생성과 타입이 관계없음을 이해하기
### TS 컴파일러의 역할은 크게 두 가지로 구분된다. 
- TS 컴파일러는 최신 TS, JS가 모든 웹 브라우저에서 동작할 수 있도록, 구버전의 JS로 트랜스파일 한다
- 코드의 타입 오류를 체크한다.
  이 두가지의 역할은 완벽히 독립적이기 때문에 TS가 JS로 컴파일 될 때 코드 타입에 영향을 주지 않고, <br>
  JS가 실행하는 시점에 TS의 타입은 영향을 주지 않는다. <br>
  타입오류가 있는 코드도 컴파일이 가능하여, 화면이 동작하는 모습을 볼 수 있다.<br>
- TS 컴파일 단계에서 타입을 체크하고, JS 런타임에는 타입과 관련된 구문은 제거되기 때문에 런타임시 타입 체크는 불가능하다
- 타입 연산은 런타임에 영향을 주지 않는다
- 런타임 타입은 선언된 타입과 다를 수 있다
<br>

### 런타임 시 타입체크를 할 수 있는 방법
- (1) in연산자를 사용한 타입가드 section03 - chapter05.ts
    
    ```jsx
    interface Square {
      width: number;
    }
    interface Rectangle extends Square {
      height: number;
    }
    type Shape = Square | Rectangle;
    function calculateArea(shape: Shape) {
    
    	// if (shape instanceof Rectangle) {
    	// instanceof는 객체가 특정 클래스에 속하는지의 확인 여부 연산자다.
    	// Rectangle은 타입을 지정하고 있으므로 런타임 시 Error가 발생한다. 
     
      if ('height' in shape) {
    	// in 은 객체의 속성 존재 여부를 확인하는 연산자다.
        shape;  // Type is Rectangle
        return shape.width * shape.height;
      } else {
        shape;  // Type is Square
        return shape.width * shape.width;
      }
    }
    ```
    <br> 
    
- (2) 태그된 유니온 방법 ( = 서로소 유니온 타입 ) section03 - chapter06.ts <br>
tag는 literal 타입으로 정의되었기 때문에, (riteral은 하나의 데이터만 type으로 받음)
    
    ```jsx
    interface Square {
      kind: 'square';
      width: number;
    }
    interface Rectangle {
      kind: 'rectangle';
      height: number;
      width: number;
    }
    type Shape = Square | Rectangle;
    
    function calculateArea(shape: Shape) {
      if (shape.kind === 'rectangle') {
        shape;  // Type is Rectangle
        return shape.width * shape.height;
      } else {
        shape;  // Type is Square
        return shape.width * shape.width;
      }
    }
    ```
<br> 

- (3) 타입을 클래스로 만드는 방법 ( +++ 나중에 더 )
<br>
    
### 타입스크립트는 함수 타입 수준에서만 오버로딩 기능을 지원한다.
하나의 함수에 여러 개의 선언문(오버로드 시그니처)을 작성할 수 있지만<br>
**실제 함수를 구현하는 부분(구현체)은 하나뿐이다.**
    
    ```jsx
    function func(a: number): void;
    function func(a: number, b: number, c: number): void;
    
    function func(a: number, b?: number, c?: number) {
      if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
      } else {
        console.log(a * 20);
      }
    }
    func(1);
    func(1, 2, 3);
    ```
<br>

## 아이템04) 구조적 타이핑에 익숙해지기

- 자바스크립트는 본질적으로 Duck Typing 덕타이핑 기반이다.
- **Duck Typing이란, 해당 객체의 메서드나 프로퍼티를 기준으로 객체의 유형을 결정하는 것인데, <br>
  타입스크립트는 이런 자바스크립트의 특징을 그대로 따라서 모델링 해야 하기 때문에 구조적 타이핑을 사용한다.** 
- NamedVector와 Vector2D의 타입 관계를 정의하지도 않았는데 함수의 실행에서 Error가 발생하지 않았다.<br>
  NamedVector의 type과 Vector2의 type이 호환되기 때문에 구조적 타이핑의 관점에서 보았을 때, 에러가 발생하지 않은 것이다.
    
    ```jsx
    interface Vector2D {
      x: number;
      y: number;
    }
    interface NamedVector {
      name: string;
      x: number;
      y: number;
    }
    
    function calculateLength(v: Vector2D) {
      console.log(v);
      return Math.sqrt(v.x * v.x + v.y * v.y);
    }
    
    const v:NamedVector = { x: 3, y: 4, name: "thdud" };
    console.log(calculateLength(v));
    
    ```
  <br>

## 아이템05) any 타입 지양하기

- 타입 체커를 무력화 시키기 때문에 타입 안전성이 떨어진다
- 함수 시그니처를 무시한다. <br>
  (함수 시그니처란, 호출하는 쪽은 약속된 타입의 입력을 제공하고 <br>
  함수는 약속된 타입의 결과를 반환해야 하는데 any를 사용하면 이런 type이 무시된다. ) 
- 자동완성 기능과 도움말이 제공되지 않는다
- 코드 리팩터링 때 버그를 보여주지 않는다
- 타입 설계가 불분명해진다
- 타입시스템의 신뢰도를 떨어뜨린다
