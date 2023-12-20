/**
  any를 구체적으로 변형해서 사용하기
  any는 TypeScript에서 굉장히 큰 범위다
  그러므로 그것보다 구체적인 타입이 있을 수 있다.
*/


//////////////////////////////////
// any보다 any[]이 조금 더 구체적인 타입이다.
// 매개변수로 배열을 체크하거나 length프로퍼티를 체크한다
function getLengthBad(array: any) {  // Don't do this!
  return array.length;
}

function getLength(array: any[]) {
  return array.length;
}

//////////////////////////////////
// 매개변수가 객체지만 값을 알 수 없을 때 (1) 
// { [ key ] : object  }
function getLengthBad2(array: any) {  // Don't do this!
  return array.length;
}

function getLength2(array: any[]) {
  return array.length;
}
function hasTwelveLetterKey2(o: object) {
  for (const key in o) {
    if (key.length === 12) {
      console.log(key, o[key]);
                      // { } 타입에 할당할 수 없다. 
      return true;
    }
  }
  return false;
}

//////////////////////////////////
// 매개변수가 객체지만 값을 알 수 없을 때 (2) 
// { [ key : string ] : any  } 
function hasTwelveLetterKey3(o: {[key: string]: any}) {
  for (const key in o) {
    if (key.length === 12) {
      return true;
    }
  }
  return false;
}