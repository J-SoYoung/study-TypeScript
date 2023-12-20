/**
 * 함수타입 정의
 */

// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는가
function func(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => {
  return a + b;
};

// 함수의 매개변수
// 기본타입이 설정돼 있다면 자동 추론된다
// 선택적 매개변수가 있다면 필수 매개변수를 먼저 작성해야 한다
function introduce(name = "정소영", tall?: number) {
  console.log(`name : ${name}, 키: ${tall}`);
  if (typeof tall === "number") {
    console.log(`name : ${name}, 키: ${tall + 10}`);
  }
}

introduce("후후후", 170);
introduce("정소팡");

// 나머지 매개변수
// rest파라미터는 주어진 인수를 배열로 받는 역할을 한다. 그래서 type은 []이된다.
// 이때 rest파라미터에 tuple을 사용하면 매개변수로 받는 데이터의 개수를 제한할 수 있다.
// function getSum(...rest: [number, number, number]) {
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

console.log(getSum(1, 2, 3));
console.log(getSum(1, 2, 3, 4, 5, 6));
