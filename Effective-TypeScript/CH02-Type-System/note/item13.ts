/**
 * 타입을 정의하는 방법
 * type, interface
 */

type TState = {
  name: string;
  capital: string;
}
interface IState {
  name: string;
  capital: string;
}

// 비슷한점 1 ) 인덱스 시그니처 사용 
type TDict = { [key: string]: string };
interface IDict {
  [key: string]: string;
}

// 비슷한점 2) 함수 타입 사용 가능
type TFn = (x: number) => string;
interface IFn {
  (x: number): string;
}

const toStrT: TFn = x => '' + x;  // OK
const toStrI: IFn = x => '' + x;  // OK

// 비슷한 점 3 ) 확장이 가능하다, 
interface IStateWithPop extends TState {
  population: number;
}
type TStateWithPop = IState & { population: number; };

// 비슷한 점 4 ) 클래스를 구현할 수 있다 