# Effective-TS-CHAPTER07-코드를 작성하는 법

[:memo: effective-main][ effective-main ] 메인으로 가기

[effective-main]: /B-Effective-TypeScript

## 🫐아이템53) 타입스크립트 기능보다는 ECMAScript기능을 사용하기

ECMAScript 2015이전 TS는 JS와 호환되기 위해서 자체적인 기술들을 개발했어야 했다. 하지만 JS의 성능이 높아지고 기능이 추가되면서 TS의 기능을 사용하지 않아도 충분하게 되었다. 아래의 기능들은 타입 공간과 값 공간의 구분이 명확하지 않기 때문에 사용하지 않는 것이 좋다
