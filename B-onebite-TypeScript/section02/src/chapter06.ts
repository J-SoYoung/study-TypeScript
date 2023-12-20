// any : 특정 변수의 타입을 확실히 모를 때
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// node로 코드를 실행해보면 Error가 발생한다.
// any는 TS컴파일 시 타입 체크는 통과하지만
// 코드가 실행하는 런타임에서는 에러가 발생하게 된다.

// unknown
// 변수에 unknown타입이 설정되면 모든 값을 할당 받을 순 있지만
// unknown타입의 값은 어떤 변수에도 할당 할 수 없고, 연산할 수 없다!
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  // = 타입 정제, 타입 좁히기 과정을 통해 무분별한 타입 지정을 막을 수 있다
  unknownVar * 2;
}
