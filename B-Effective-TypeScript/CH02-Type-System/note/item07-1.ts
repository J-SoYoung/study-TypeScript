interface Identified {
  id: string;
}
interface Person {
  name: string;
}
interface Friend {
  name: string;
  school: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;
/**
  & 연산자는 두 타입의 intersection(교집합)을 계산하기 때문에
  두 타입의 공통 타입을 지칭하는 것 같지만, 
  타입 연산자는 값의 집합에 적용되기 때문에 Person과 Lifespan을 
  둘 다 가지는 값이 intersection에 속하게 된다.
  => intersection은 각 타입 내의 속성을 모두 포함하는 것이 일반적이다.
 */
const person: PersonSpan = {
  birth: new Date("2023-06-18"),
  death: new Date("2070-06-18"),
  name: "thdud",
};

type K = keyof (Person | Lifespan);
type S = keyof (Person | Friend);

console.log('ddddt')