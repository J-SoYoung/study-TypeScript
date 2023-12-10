/**
 * 비동기 코드에는 콜백대신 async 함수를 사용하자
 */

const url1 = '1';
const url2 = '2';
const url3 = '3';

function fetchURL(url: string, cb: (response: string) => void) { cb(url); }

function fetchPagesCB() {
  let numDone = 0;
  const responses: string[] = [];
  const done = () => {
    const [response1, response2, response3] = responses;
    // ...
  };

  const urls = [url1, url2, url3];
  urls.forEach((url, i) => {
    fetchURL(url, r => {
      responses[i] = url;
      numDone++;
      if (numDone === urls.length) done();
    });
  });
}

async function fetchPages(){
  const [response1, response2, response3] = await Promise.all([
    fetch(url1), fetch(url2), fetch(url3)
  ]); 
  /// 
}