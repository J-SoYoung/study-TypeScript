/**
 * 인덱스드 엑세스 타입 < 튜플 >
 */

// interface는 객체에 특화돼있으므로, type으로 바꿔 사용
type Tup = [number, string, boolean]

type Tup0 = Tup[0]

type Tup1 = Tup[1]

type Tup2 = Tup[2]

// type Tup3 = Tup[3]  // Tup에 지정돼 있지 않은 타입임으로 Error

// 3개의 타입이 유니온으로 합쳐진다 
type TupNum = Tup[number]

