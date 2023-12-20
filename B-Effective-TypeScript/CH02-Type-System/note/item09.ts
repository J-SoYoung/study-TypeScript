/**
 * 타입 단언보다는 타입 선언을 사용하기
  타입 단언은 강제성을 띄고 있기 때문에 타입 체커시 에러를 무시할 가능성이 높다
  그렇기 때문에 정확한 타입 체크를 위해서는 타입 선언을 해 주는 것이 좋다.
 */

interface Person { name: string };
// const alice: Person = {};
   // ~~~~~ Property 'name' is missing in type '{}'
   //       but required in type 'Person'
const bob = {} as Person;  // No error