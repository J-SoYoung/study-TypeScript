# 한입 타입스크립트 강의

### section10\_유틸리티 타입

타입스크립트가 자체적으로 제공하는 특수한 타입들이다.

- Partial : 특정 객체 타입의 프로퍼티를 모두 선택적 프로퍼티로 변환한다. 기본 객체 타입의 정의된 프로퍼티 중 일부만 사용할 수 있도록 도와준다

```
 type Partial<T> = {
  [P in keyof T]? T[P]
 }
```

- Required : 모든 프로퍼티를 필수 프로퍼티로 변환한다

```
 type Required<T> = {
  [P in keyof T]-? T[P]
 }
```

- Readonly : 읽기전용 프로퍼티로 변환
- Pick : 특정 객체 타입으로부터 특정 프로퍼티를 골라내는 타입이다.

```
  type Pick<T,K extends keyof T> = {
    [P in K] T[P]
  }
```

- Record: 특정 키 값을 사용하여 타입을 정의한다
- Omit : 특정 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
