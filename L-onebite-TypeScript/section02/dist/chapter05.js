// enum타입 = 열거형 타입
// JS에는 없고 TS에만 있는 type이다.
// 객체에 어떤 값을 넣었는지 정확히 기억이 안날 때, enum을 활용하면 유익하다
// 숫자형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
// 문자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
// typescript의 type설정은 TS컴파일 이후 사라지는데 
// 아래 객체에서는 enum값이 사라지지 않는다 
let user1 = {
    name: "정소영",
    role: Role.ADMIN,
    language: Language.korean,
};
let user2 = {
    name: "정소희",
    role: Role.USER,
    language: Language.korean,
};
let user3 = {
    name: "정소정",
    role: Role.GUEST,
    language: Language.english,
};
console.log(user1, user2, user3);
export {};
