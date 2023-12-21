# 한입 타입스크립트 강의

### section01. TypeScript의 개발 환경 구축
- TypeScript의 개발 환경 구축이란, TypeScript가 실행할 수 있는 환경을 만들어준다는 의미다. 
**Node.js 설치 후 Node.js 프로젝트 초기화**

Node.js가 로컬환경에 설치되면 패키지 관리 도구인 npm도 함께 설치된다. npm은 Node.js용 패키지 관리 도구이다. Node.js프로젝트를 초기화여 pakage,json파일을 생성한다.

```jsx
npm init  // 또는
npm init -y
```

**TypeScript 설치 및 초기화**

TypeScript 설치 후, 프로젝트 초기화를 하면 컴파일러 설정인 tsconfig.json파일을 생성한다. 컴파일 옵션, 파일 목록, 제외할 파일 등의 설정을 지정할 수 있다.

```jsx
// TypeScript 설치
npm install -g typescript

// TypeScript 프로젝트 초기화
tsc --init
```

**컴파일 후, Node.js 실행환경에서의 실행**

tsc로 컴파일 된 파일은 tsconfig.js에서 생성할 곳을 지정할 수 있다.  tsc를 사용해 TS를 JS로 컴파일 한 뒤, JS를 node를 사용하여 터미널에 결과값을 출력해 볼 수 있다. 하지만 ts-node를 설치하여 위 과정을 한번에 처리할 수 있다.

```jsx
tsc src/index.ts   // TS를 JS로 컴파일 후,
node src/index.js  // JS를 node로 실행

npm i -g ts-node      // ts-node설치  
ts-node src/index.ts  // ts-node로 ts코드 실행하기
```

**@types/node 패키지 설치하기**

타입스크립트 프로젝트를 시작하고 Node.js의 내장 기능들의 타입 정보를 담고 있는 @types/node 패키지를 설치해야 한다.

```jsx
npm i @types/node
```