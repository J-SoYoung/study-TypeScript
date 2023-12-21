/**
 * 분산적 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;


let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number|string>;
// 조건부 타입에 유니온 타입을 할당하면 분산적 조건부타입으로 바뀜
// 유니온 타입의 내용이 분리되어 2번들어감 => 그 결과값이 | 유니온을 묶이게됨

// let c: StringNumberSwitch<number>; // 결과값 string
// let c: StringNumberSwitch<string>; // 결과값 number => 이 둘의 결과가 |로 묶임

let d: StringNumberSwitch<boolean|number|string>

