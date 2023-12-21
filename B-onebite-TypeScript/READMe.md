# 한 입 크기로 잘라먹는 타입스크립트 강의
- JavaScript의 예제 코드는 https://playcode.io/javascript 에서 실행할 수 있습니다.
- TypeScript의 예제 코드는 https://www.typescriptlang.org/play 에서 실행할 수 있습니다.
<br>

### section01_Intro
- TypeScript 기본설정 및 코드실행
- 컴파일 옵션 설정

### section02_TypeScript basic
- basic type ( number, string, boolean, null, undefined, literal )
- array, tuple
- object
- 타입 별칭, 인덱스 시그니처
- enum (TS컴파일 이후 타입 설정이 사라지지 않고 JS의 객체처럼 변환되어 값처럼 사용된다)
- any, unknown(unknown타입이 설정된 값은 어떤 값도 할당받을 수 없고 연산할 수 없다)
- void, never

### section03_TypeScript advanced
- 기본 타입의 호환성, 객체 타입의 호환성 (업캐스팅 가능/ 다운캐스팅 불가)
- **대수 타입** - Union(| 합집합) / intersection(& 교집합)
- **타입 추론** - 타입스크립트는 초기값을 보고 타입을 추론할 수 있다.
- **타입 단언** - 타입스크립트의 컴파일 과정에서 타입을 지정할 수 있도록 선언하는 것 
- **타입 좁히기** - 타입 가드의 방법을 사용하여 넓은 타입을 좁혀 분기별로 타입을 지정해 사용할 수 있도록 하는 방법이다. ( if(typoof ~~), instanceof, in 사용한다 )
- **서로소 유니온 타입** - 교집합이 없는 타입으로 만든 유니온 타입이다. literal 타입의 tag를 생성하여 이를 switch문으로 구별하여 조건문의 타입을 좁혀 사용할 수 있다. 

### section04_function & type
- **함수타입 정의** - 함수는 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는가
- **함수 타입 표현식, 호출 시그니처** - 함수 타입을 별칭으로 만들어 사용할 수 있다. 
- **함수 타입의 호환성** - 특정 함수를 다른 함수 타입으로 취급해도 괜찮은가, (반환값과 매개변수의 타입이 호환되어야 한다)
- **함수 오버로딩(오버로드 시그니처)** - 같은 함수를 매개변수, 타입에 따라 여러 버전으로 만드는 문법
- **사용자 정의 타입 가드** - T/F의 결과값을 만드는 함수를 활용하여 타입을 정의할 수 있다. 

### section05_interface
- **interface** - 타입 별칭과 동일하게 타입에 이름을 붙이는 문법, 객체의 구조를 정의하기 편하다 (상속 기능 등)
- interface는 extends를 활용하여 타입을 상속받아 확장할 수 있다.
- interface는 동일한 키워드로 type을 중복선언 하게 되면 두 type이 합쳐진다.

### section06_class
클래스는 동일한 모양의 객체를 생성할 수 있도록 도와주는 문법이다. 
- JavaScript에서의 클래스 예제
- TypeScript에서의 클래스 예제 

### section07_제네릭
제네릭은 타입이 정해지지 않은 변수에 타입변수<T>를 지정하여 타입을 가변적으로 정할 수 있도록 해 주는 문법이다. 
- 제네릭을 활용하여 map, forEach의 타입을 구현할 수 있다.

### section08_타입 조적하기
타입도 다양한 연산을 통해 정의할 수 있다. section8은 TypeScript의 고급 문법에 대한 내용이다.
- 인덱스드 엑세스 타입 : 인덱스를 이용해 특정 프로퍼티 타입을 추출하는 방법
- keyof 연산자 : 특정 객체 타입으로부터 key를 추출할 수 있는 방법
- typeof 연산자 : 데이터 타입을 반환하는 연산자
- mapped type : 객체 타입을 기반으로 새로운 객체타입을 만든다

### section09_조건부타입
삼항 연산자를 이용해 조건에 따라 다른 타입을 정의하는 문법, 제네릭과 함께 사용하면 장점이 더욱 부각된다. 

### section10_유틸리티 타입
- 타입스크립트가 자체적으로 제공하는 특수한 타입들이다. 
- Partical, Required, Readonly, Record, Pick, Omit ... 

### section11_React + TypeScript => TODO만들기  