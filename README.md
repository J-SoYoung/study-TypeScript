# Typescript Study Note

<br>

## 01\_한 입 크기로 잘라먹는 TypeScript (inflearn-lecture)

<img src="https://github.com/thdud2262/study-typescript/assets/85012454/6b5f734e-bbf6-4892-b0ce-18e5c9e50ef4" width="280" title="Cover Image" align="left">
<br><br><br><br><br><br><br><br><br>
<br><br>

### 강의내용 및 노트

| 제목                          | 내용                                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------- |
| [:memo: section01][section01] | 타입스크립트 소개, JS의 단점과 TS의 장점, <br>타입스크립트의 동작 원리 및 컴파일러 옵션 설정    |
| [:memo: section02][section02] | 타입스크립트 기본형 타입 (원시/리터럴 타입, 배열/튜플, 객체, 타입별칭과 인덱스 시그니처)        |
| [:memo: section03][section03] | 타입은 값들의 집합이다. (객체 타입의 호환성, Union, intersection, 타입추론, 타입단언)           |
| [:memo: section04][section04] | 함수와 타입 (함수타입 표현식, 호출 시그니처, 함수타입의 호환성, 오버 )                          |
| [:memo: section05][section05] | 인터페이스                                                                                      |
| [:memo: section06][section06] | 클래스                                                                                          |
| [:memo: section07][section07] | 제네릭 ( map, forEach, 제네릭 인터페이스/타입별칭, 프로미스와 제레릭 )                          |
| [:memo: section08][section08] | 타입 조작하기 (인덱스 엑세스드 타입, keyof/typeof, Mapped type, 템플릿 리터럴 타입)             |
| [:memo: section09][section09] | 조건부 타입                                                                                     |
| [:memo: section10][section10] | 유틸리티 타입 ( Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, ReturnType ) |

<br>
<br>

## 02_Effective TypeScript

<img src="https://github.com/thdud2262/study-typescript/assets/85012454/531b6998-533b-45b2-a52a-50881c6b4ed8" width="280" title="Cover Image" align="left">

| 제목                          | 내용                                                             |
| ----------------------------- | ---------------------------------------------------------------- |
| [:memo: chapter01][chapter01] | 타입스크립트 소개<br>아이템01) TS와 JS관계 이해하기<br>아이템02) TS설정 이해하기<br>아이템03) 코드 생성과 타입이 관계없음을 이해하기<br>아이템04) 구조적 타이핑에 익숙해지기<br>아이템05) any 타입 지양하기|                       
| [:memo: chapter02][chapter02] | 타입스크립트 타입 시스템<br>아이템06) 편집기를 사용하여 타입 시스템 탐색하기<br>아이템07) 타입이 값들의 집합이라고 생각하기<br>아이템08) 타입 공간과 값 공간의 심벌 구분하기<br>아이템09) 타입 단언보다는 타입 선언을 사용하기<br>아이템10) 객체 래퍼 타입 피하기<br>아이템11) 잉여 속성 체크와 한계 인지하기<br>아이템12) 함수 표현식에 타입 적용하기<br아이템13) 타입과 인터페이스의 차이점 알기<br>아이템14) 타입 연산과 제너릭 사용으로 반복 줄이기<br>아이템15) 동적 데이터에 인덱스 시그니처 사용하기<br>아이템16) number인덱스 시그니처 보다는 Array, 튜플, ArrayLike사용<br>아이템17) 변경 관련된 오류 방지를 위해 readonly사용<br>아이템18) 매핑된 타입을 사용하여 값을 동기화 |
| [:memo: chapter03][chapter03] | 타입 추론<br>아이템19) 추론 가능한 타입을 사용해 장황한 코드 방지하기<br>아이템20) 다른 타입에는 다른 변수 사용하기<br>아이템21) 타입 넓히기 ( 타입 넓히기 제어 )<br>아이템22) 타입 좁히기<br>아이템23) 한꺼번에 객체 생성하기<br>아이템24) 일관성 있는 별칭 사용하기<br>아이템25) 비동기 코드에는 콜백 대신 async 함수 사용하기<br>아이템26) 타입 추론에 문맥이 어떻게 사용되는지 이해하기<br>아이템27) 함수형 기법과 라이브러리로 타입 흐름 유지하기 |
| [:memo: chapter04][chapter04] | 타입 설계<br>아이템28) 유효한 상태만 표현하는 타입을 지향하기 <br> 아이템29) 사용할 때는 너그럽게, 생성할 때는 엄격하게<br> 아이템30) 문서에 타입 정보를 쓰지 않기<br>아이템31) 타입 주변에 null 값 검색하기<br>아이템32) 유니온의 인터페이스보다는 인터페이스의 유니온 사용하기<br>아이템33) string타입보다 구체적인 타입 사용하기<br> 아이템34) 부정확한 타입보다는 미완성 타입을 사용하기<br>아이템35) 데이터가 아닌 API와 명세를 보고 타입 만들기<br>아이템36) 해당 분야의 용어로 타입 이름 짓기<br>아이템37) 공식 명칭에는 상표를 붙이기     |
| [:memo: chapter05][chapter05] | any다루기<br>아이템38) any타입은 가능한 한 좁은 범위 내에서만 사용하기<br>아이템39) any를 구체적으로 변형해서 사용하기<br>아이템40) 함수 안으로 타입 단언문 감추기<br>아이템41) any의 진화를 이해하기<br>아이템42) 모르는타입의 값에는 any대신 unknown 사용하기<br>아이템43) 몽키 패치보다는 안전한 타입을 사용하기<br아이템44) 타입 커버리지를 추적하여 타입 안전성 유지하기>  |
| [:memo: chapter06][chapter06] | 타입선언과 @types                                                 |
| [:memo: chapter07][chapter07] | 코드를 작성하고 실행하기                                           |
| [:memo: chapter08][chapter08] | 타입스크립트로 마이그레이션하기                                     |

<!-- 한입 TypeScript -->

[section01]: /onebite-TypeScript/section01
[section02]: /onebite-TypeScript/section02
[section03]: /onebite-TypeScript/section03
[section04]: /onebite-TypeScript/section04
[section05]: /onebite-TypeScript/section05
[section06]: /onebite-TypeScript/section06
[section07]: /onebite-TypeScript/section07
[section08]: /onebite-TypeScript/section08
[section09]: /onebite-TypeScript/section09
[section10]: /onebite-TypeScript/section10

<!-- Effective TypeScript -->

[chapter01]: /Effective-TypeScript/CH01-TypeScript-intro
[chapter02]: /Effective-TypeScript/CH02-Type-System
[chapter03]: /Effective-TypeScript/CH03_Type-inference
[chapter04]: /Effective-TypeScript/CH04-Type-Design
[chapter05]: /Effective-TypeScript/CH05-any
[chapter06]: /Effective-TypeScript/CH06-Type-Declarations
[chapter07]: /Effective-TypeScript/CH07-Code-Write-Run
[chapter08]: /Effective-TypeScript/CH08-Migrate
