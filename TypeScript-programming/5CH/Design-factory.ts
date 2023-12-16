/**
 * 디자인패턴 - 팩토리 패턴 ( 객체 생성에 대한 패턴 ) 
 * (1) 인터페이스를 정의하면
 * (2) 클래스에서는 이를 기반으로 객체를 생성한다.
 * implement키워드를 사용해 Shoe 타입을 만족하는 객체를 생성한다.   
 */

type Shoe = {
  purpose : string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}
class Boot implements Shoe {
  purpose = 'woodcutting'
}
class Sneaker implements Shoe {
  purpose = 'walking'
}

let Shoe = {
  create(type: 'balletFlat'|'boot'|'sneaker'): Shoe{
    switch(type){
      case 'balletFlat': return new BalletFlat
      case 'boot' : return new Boot 
      case 'sneaker' : return new Sneaker
    }
  }
}

console.log(Shoe.create('boot'))