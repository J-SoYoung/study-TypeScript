/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입으로 만든 유니온 타입
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// tag는 literal 타입으로 정의되었기 때문에, (riteral은 하나의 데이터만 type으로 받음)
// 위의 세 타입의 공통부분을 찾을 수 없게 된다. = 서로소 관계가 되고
// User타입은 서로소 관계에 있는 타입을 유니온으로 묶었기 때문에 = 서로소 유니온 타입
// switch문으로 깔끔하게 타입을 좁혀 사용할 수 있다.

function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
    }
  }
}

let user: User = {
  tag: "MEMBER",
  name: "thdud",
  point: 400,
};

login(user);

/**
 * PRACTICE_비동기 작업의 결과를 처리하는 객체
 */

// 서로소 유니온 타입을 사용해 조건문 타입을 지정해주자
type AsyncLoaing = {
  state: "LOADING";
};
type AsyncFailed = {
  state: "FAILED";
  error: { message: string };
};
type AsyncSuccess = {
  state: "SUCCESS";
  response: { data: string };
};

type AsyncTask = AsyncLoaing | AsyncFailed | AsyncSuccess;

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: { message: string };
//   response?: { data: string };
// };

// ? 선택적 프로퍼티를 사용해 타입을 설정 하는 경우
// 각 switch문의 매개변수가 정확히 해당 case인지 알 수 없고 AsyncTask로 나온다.
// 출력 결과에서도 ?옵셔널 프로퍼티나, !null단언 프로퍼티를 사용해줘야 한다.
// 하지만 서로소 유니온 타입을 통해 타입을 지정했을 경우에
// switch문의 분기에서 정확한 타입이 구별되기 때문에 더 확실한 조건문이 성립된다

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log(task.state);
      break;
    }
    case "FAILED": {
      console.log(`${task.state}, errormessage- ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`${task.state}, response- ${task.response.data}`);
      break;
    }
  }
}

const loaing: AsyncTask = {
  state: "LOADING",
};
const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류발생 원인은 ~",
  },
};
const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: " data ~~~ 성공해떠염",
  },
};

processResult(success);
