// 타입별칭
// 타입이 중복되는 경우, 변수처럼 빼서 작성하여 사용할 수 있다

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "정소영",
  nickname: "queens",
  birth: "1992.06.18",
  bio: "하이하이요",
  location: "인천시",
};

let user2: User = {
  id: 1,
  name: "정소희",
  nickname: "queens",
  birth: "1990.00.00",
  bio: "하이",
  location: "인천시",
};

// 인덱스 시그니처
// key:value의 규칙을 기준으로 객체의 타입을 지정하는 것
// 규칙을 위반하지 않으면 에러가 발생하지 않는다. 
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 810,
  UnitedKingdom: 826,
};
