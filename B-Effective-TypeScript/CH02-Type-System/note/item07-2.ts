let list: number[] = [1,2]
let tuple: [number, number] = [1, 2]

list = tuple
// tuple = list 
tuple = list as [number, number]

/**
  list는 number[] 타입으로 tuple의 [number, number]를 받아들일 수 있다
  하지만 tuple은 list보다 좁은 범위의 계층에 속하기 때문에 list의 값을 받을 수 없다. 대신 as로 타입 단언을 하면 tuple에 들어가는 list가 tuple의 타입이라고 지정하는 것이므로 가능하다. 
 */

type A = 'A'
type B = 'B'
type Twelve = 12

type Union = A | B | Twelve
type Interaction = A & B & Twelve

let union: Union = 'A'
union = 'B'

/**
 * Union타입은 3개의 타입중에 하나라도 해당이되면 통과되지만, 
 * interaction타입은 전체가 다 만족하는 타입이 되어야 하는데 그런 타입은 존재하지 않음ㅋㅋ...
 */