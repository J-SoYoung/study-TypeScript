/**
 * 다른 타입에는 다른 변수를 사용하자 
 */

////////////////////////////////////////////////////
// 변수의 값은 바뀔 수 있지만 타입의 값은 보통 바뀌지 않는다

  function fetchProduct(id: string) {}
  function fetchProductBySerialNumber(id: number) {}

  let id = "12-34-56";
  fetchProduct(id);

  // id = 123456;
  // fetchProductBySerialNumber(id);

  // ~~ '123456' is not assignable to type 'string'.
  // SerialNmber함수에서 매개변수 id는 number로 지정해놓았지만 
  // 초기 변수인 id의 type이 string이었기 때문에 typeError

////////////////////////////////////////////////////////
// union을 사용하여 타입을 확장한 뒤 사용하자
// ( 하지만 이후 타입확인을 거쳐야 하기 때문에 다른 타입에는 별도의 변수를 사용하자 )
  function fetchProduct2(id: string) {}
  function fetchProductBySerialNumber2(id: number) {}
  
  let id2: string|number = "12-34-56";
  fetchProduct(id2);

  id2 = 123456;  // OK
  fetchProductBySerialNumber(id2);  // OK