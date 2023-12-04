/**
 * JavaScript의 class문법
 * 객체를 만들어낼 수 있다.
 */
let studentA = {
    name: "이정환",
    grade: "A+",
    age: 27,
    study() {
        console.log("열심히 공부 함");
    },
    introduce() {
        console.log("안녕하세요!");
    },
};
class Student {
    // 필드
    name;
    grade;
    age;
    // 생성자 : 실제 객체를 만드는 메서드
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    // 메서드
    study() {
        console.log('열심히 공부함');
    }
    introduce() {
        console.log(`안녕하세요. ${this.name} 입니다`);
    }
}
class Developer extends Student {
    // 필드
    language;
    // 생성자
    constructor(name, grade, age, language) {
        super(name, grade, age);
        this.language = language;
    }
    // 메서드
    study() {
        console.log('열심히 공부함');
    }
    introduce() {
        console.log(`안녕하세요. ${this.name} 입니다`);
    }
    programming() {
        console.log(`${this.language}로 개발함`);
    }
}
let developer = new Developer('소영이', 'A+', 20, 'TypeScript');
console.log(developer);
developer.study();
developer.introduce();
developer.programming();
export {};
// let studentB = new Student('정소영', 'A+' , 20)
// console.log(studentB)
// studentB.study()
// studentB.introduce()
