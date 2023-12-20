/**
  * itme19 / TS가 추론이 가능하다면 굳이 타입을 지정하지 않아도 된다
  * 그렇다면 타입은 언제 명시적으로 지정해 주는 것이 좋은가?
  * 객체 리터럴, 함수 반환값에는 해 주는 것이 좋다
  * => 정확한 타입을 체크하며, 오류를 방지
  * => 함수에 대해 명확하에 알 수 있게 된다 ( 입/출력 타입 확인 )
*/

////////////////////////////////////////////////////
// 함수는 반환값의 타입이 명확하지 않아 
// 함수를 호출하고 값을 사용할 때 TypeError 발생

// cache는 promise의 결과값이기 때문에 
// if문과 함수 반환값에 promise 타입이 명시되어야 한다.
const cache: {[ticker: string]: number} = {};
function getQuote(ticker: string) {
  if (ticker in cache) {
    return cache[ticker];
  }
  return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then(response => response.json())
      .then(quote => {
        cache[ticker] = quote;
        return quote;
      });
}

// if문과 함수 반환값에 타입을 지정한 것
// Promise.resolve() => 해당 값을 promise로 감싸서 반환
// if문의 값과 함수 반환값의 타입이 동일해짐
function getQuote2(ticker: string): Promise<number> {
  if (ticker in cache) {
    return Promise.resolve(cache[ticker]);
  }
  return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then(response => response.json())
      .then(quote => {
        cache[ticker] = quote;
        return quote;
      });
}

