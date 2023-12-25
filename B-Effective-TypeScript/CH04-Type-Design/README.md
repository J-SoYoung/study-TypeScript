# Effective-TS-CHAPTER04-타입설계

[:memo: effective-main][ effective-main ] 메인으로 가기

[effective-main]: /B-Effective-TypeScript

타입스크립트에서 타입을 어떻게 설계하는 것이 좋은지,<br>
타입을 사용하고 추론하고 선언문을 작성하는 것들에 대한 내용
<br>

## 🍎아이템31) 타입 주변에 null 값 검색하기<br>

- strictNullCheckes을 true로 두고 설정하는 게 좋다. 이 옵션을 켜면 null 값과 관련된 문제점이 Error로 나온다.
- 한 값의 null 여부가 다른 값의 null에 관련되도록 설계하면 안된다. extned함수는 undefined체크를 min에서만 했기 때문에 max에서 타입 에러가 발생한다.
- 아래와 같이 에러가 나는 경우, min과 max를 하나의 객체에 넣고 null 체크를 해주면 된다.

```jsx
function extent(nums: number[]) {
  let min, max; // undefined로 초기화 되어있음
  for (const num of nums) {
    if (!min) {
      min = num;
      max = num;
    } else {
      min = Math.min(min, num);
      max = Math.max(max, num);
      // number|undefined의 형식의 인수는 number에 할당할 수 없다!!!!
    }
  }
  return [min, max];
}
```

## 🍎아이템32) 유니온의 인터페이스보다는 인터페이스의 유니온 사용하기<br>

- 유니온의 인터페이스보다는 인터페이스의 유니온을 사용하라!!! <br>
  태그된 유니온 ( 서로소 유니온 ) 패턴은 TS의 타입체커와 잘 맞기 때문에 유용한 방법이다. 이를 활용해 if조건문이나 switch문으로 분기하여 사용할 수 있다.

```jsx
// 유니온의 인터페이스
interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}

// 인터페이스의 유니온
interface FillLayer {
  type: "fill";
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  type: "line";
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  type: "paint";
  layout: PointLayout;
  paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayer;
```

## 🍎아이템33) string타입보다 구체적인 타입 사용하기<br>

- string타입의 범위는 매우 넓기 때문에 any와 비슷한 문제를 가지고 있다. 따라서 잘못 사용되면 무효한 값을 허용하고 타입간의 관계도 감춰버린다. string으로 타입을 설정하기 전에 더 좁은 타입이 가능한지 검토해봐야 한다.
- 변수의 범위를 보다 정확하게 표현하고 싶다면 string타입보다는 문자열 리터럴 타입의 유니온을 사용하기
- 객체의 속성을 받을 때는 string보다 keyof T를 사용하기

```jsx
// 너무 포괄적인 string type
interface Album {
  artist: string;
  title: string;
  releaseDate: string; // YYYY-MM-DD
  recordingType: string; // E.g., "live" or "studio"
}

// string보다 구체적인 형태의 string으로 바꿔 타입을 생성하는 것이 좋다
type RecordingType = "studio" | "live";
interface NewAlbumType {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType;
}
```
