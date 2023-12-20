/**
 * item28 유효한 상태만 표현하는 타입을 지향하기
 */
interface RequestPending {
  state: 'pending';
}
interface RequestError {
  state: 'error';
  error: string;
}
interface RequestSuccess {
  state: 'ok';
  pageText: string;
}
type RequestState = RequestPending | RequestError | RequestSuccess;

// 네트워크 요청 과정의 상태를 각각 명시하는 태그된 유니온을 사용했다. 
// 이로써 무효한 상태를 허용하지 않도록 하였다
interface State {
  currentPage: string;
  requests: {[page: string]: RequestState};
}


function renderPage(state: State) {
  console.log(state)
  const {currentPage} = state;
  console.log('renderpage의 currentPage--', currentPage)

  const requestState = state.requests[currentPage];
  console.log('renderpage의 requestState--', requestState)
  
  switch (requestState.state) {
    case 'pending':
      return `Loading ${currentPage}...`;
    case 'error':
      return `Error! Unable to load ${currentPage}: ${requestState.error}`;
    case 'ok':
      return `<h1>${currentPage}</h1>\n${requestState.pageText}`;
  }
}

function getUrlForPage(p: string) { 
  return `getUrlForPage 함수 호출 -${p}`; 
}

async function changePage(state: State, newPage: string) {
  console.log('changePage()매개변수', state, newPage)

  state.requests[newPage] = {state: 'pending'};
  state.currentPage = newPage;
  console.log('변경된 state-',state)

  try {
    const response = await fetch(getUrlForPage(newPage));
    console.log('response-', response)

    if (!response.ok) {
      throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
    }
    const pageText = await response.text();
    state.requests[newPage] = {state: 'ok', pageText};

  } catch (e) {
    state.requests[newPage] = {state: 'error', error: '' + e};
  }
  console.log('최종 state-', state)
  return state
}

// 예시: 초기 상태 생성
const initialState: State = {
  currentPage: 'home',
  requests: {
    'home': { state: 'ok', pageText: 'Welcome to the home page!' }
  },
};

// 예시: 초기 상태로 페이지 렌더링
console.log(renderPage(initialState));

// 예시: 페이지 변경 
const newState = { ...initialState };
changePage(newState, 'about');