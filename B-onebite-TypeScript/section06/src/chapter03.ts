/** 
 * 클래스의 접근제어자 access modifier
 * 클래스에서 프로퍼티에 접근할 수 있는가의 여부는 접근제어자에 의해 결정된다
    public : 필드의 접근이 가능하다
    private : 클래스 외부에서 프로퍼티로 접근 및 수정 불가하다( 클래스 내부에서만 가능)
    protected : 클래스 내부의 메서드에서 수정 가능하다 
  */

class Employee {
  // 필드
  private name: string;
  public age: number;
  protected position: string;

  // 생성자
  constructor(name:string, age:number, position:string){
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work(){
    this.position 
    console.log(`${this.name}은 오늘도 열일합니다!!!`)
  }
}

const employee:Employee = new Employee ('정소영',20,'FrontEnd')
employee.age = 31
// employee.name = '팡팡팡' // 필드의 접근 제어자가 private이면 수정할 수 없다 
// employee.position = 'FE-developer' // 클래스 외부에서 수정 불가, 내부의 메서드에서만 수정 가능