/**
 * 인터페이스와 클래스
 * 
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 캐릭터 클래스는 캐릭터인터페이스를 구현한다. 
class Character implements CharacterInterface {

  // constructor에 접근제어자를 작성해주면 필드 내용을 작성하지 않아도 되고, this로 연결해주지 않아도 된다.
  // 인터페이스는 퍼블릭 제어자가 기본이다
  constructor(public name:string, public moveSpeed:number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}