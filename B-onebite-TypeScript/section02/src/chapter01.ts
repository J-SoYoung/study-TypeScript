// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined 타입
let unde1: undefined = undefined;

// 임시로 null값을 넣어야 할 때는 tsconfig.js에서 설정을 넣어주면 된다
// "strictNullChecks": false ( 엄격한 null 검사 : false / 기본 true )
let numA: number = null;

// 리터럴 타입 => 타입 자체를 값으로 표현하여 만든 것 
let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;