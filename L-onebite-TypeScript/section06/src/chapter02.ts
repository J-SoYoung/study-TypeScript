/**
 * 타입스크립트의 클래스
 * 필드와 생성자에 타입을 지정해준다.
 * 클래스 자체가 하나의 타입이 될 수 있다. 
 * JS클래스와 마찬가지로 TS도 extends하여 클래스를 확장할 수 있다. 
 */

const employee = {
  name : '정소영',
  age: 20,
  position : 'developer',
  work(){
    console.log('집중합시다!!!')
  }
}

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name:string, age:number, position:string){
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work(){
    console.log(`${this.name}은 오늘도 열일합니다!!!`)
  }
}
const employeeB = new Employee('정소영',20,'FroneEnd')
console.log(employeeB)
employeeB.work()

const employeeC :Employee = new Employee ('thdud',22,'frontend Develoepr')
console.log(employeeC)


class ExecutiveOfficer extends Employee {
  // 필드
  officerNumber : number;

  // 생성자
  constructor(name:string , age:number, position:string, officerNumber:number){
    super(name, age, position)
    this.officerNumber = officerNumber;
  }
}