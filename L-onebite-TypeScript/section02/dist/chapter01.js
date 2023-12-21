// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// string
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${str1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined 타입
let unde1 = undefined;
// 임시로 null값을 넣어야 할 때는 tsconfig.js에서 설정을 넣어주면 된다
// "strictNullChecks": false ( 엄격한 null 검사 : false / 기본 true )
let numA = null;
// 리터럴 타입 => 타입 자체를 값으로 표현하여 만든 것 
let strA = "hello";
let boolA = true;
let boolB = false;
export {};
