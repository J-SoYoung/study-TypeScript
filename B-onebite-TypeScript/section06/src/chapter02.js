/**
 * 타입스크립트의 클래스
 * 필드와 생성자에 타입을 지정해준다.
 * 클래스 자체가 하나의 타입이 될 수 있다
 */
var employee = {
    name: '정소영',
    age: 20,
    position: 'developer',
    work: function () {
        console.log('집중합시다!!!');
    }
};
var Employee = /** @class */ (function () {
    // 생성자
    function Employee(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    Employee.prototype.work = function () {
        console.log("".concat(this.name, "오늘도 열공합니다!!!"));
    };
    return Employee;
}());
var employeeB = new Employee('정소영', 20, 'FroneEnd');
console.log(employeeB);
employeeB.work();
var employeeC = new Employee('thdud', 22, 'frontend Develoepr');
console.log(employeeC);
