/**
 * 타입연산과 제너릭 사용으로 반복줄이기 
 */
const surfaceArea = (r,h) => 2* Math.PI *r * (r+h)
const volume = (r,h) => Math.PI * r*r*h
for (const [r,h] of [[1,1],[1,2],[2,1]]){
  console.log(`
  Cylinder ${r} x ${h}
  Surface area : ${surfaceArea(r,h)}
  Volune: ${volume(r, h)}
  `)
}

// 값의 형태에 해당하는 타입을 정의 (1) typeof 사용
const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: '#00FF00',
  label: 'VGA',
};
// interface Options {
//   width: number;
//   height: number;
//   color: string;
//   label: string;
// }
type Options = typeof INIT_OPTIONS;



// 반환값에 명명된 타입을 정의, 
// ReturnType<T> : 타입변수 T에 할당된 함수 타입의 반환값을 추출하는 타입
function getUserInfo(userId: string) {
  // COMPRESS
  const name = 'Bob';
  const age = 12;
  const height = 48;
  const weight = 70;
  const favoriteColor = 'blue';
  // END
  return { userId, name, age, height, weight, favoriteColor };
}
// Return type inferred as { userId: string; name: string; age: number, ... }

type UserInfo = ReturnType<typeof getUserInfo>;


