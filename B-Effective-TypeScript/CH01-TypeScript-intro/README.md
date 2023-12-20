# Effective-TS-CHAPTER01-타입스크립트 알아보기

### 아이템01 TS와 JS관계 이해하기

- **TS는 JS의 상위집합(superset)이다.**
  모든 자바스크립트는 타입스크립트지만 모든 타입스크립트는 자바스크립트가 아닐 수 있다.
  tuple(길이와 타입이 고정된 배열의 타입), enum(열거형 타입)과 같은 타입은 자바스크립트에는 없다.
- TS는 JS의 런타임을 모델링 할 수 있다.
  TS는 컴파일을 수행 하면서 JS의 런타임 시 오류를 발생시킬 만한 코드와 타입을 체크한다.
  _JS의 런타임을 모델링한다? 런타임 동작을 따르면서 정적 타입을 체크한다는 뜻_

### 아이템02 TS설정 이해하기

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
- include \*\*\*\*: 컴파일할 파일이나 디렉토리를 지정

### 아이템03 - 코드 생성과 타입이 관계없음을 이해하기

### 아이템04 - 구조적 타이핑에 익숙해지기

### 아이템05 - any 타입 지양하기
