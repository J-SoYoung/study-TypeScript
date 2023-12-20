type Feature = any;

declare function calculateBoundingBox(f: Feature): [number, number, number, number];

// 매개변수 타입과, 반환값의 타입을 도입한 경우라고 할까.
interface LngLat { lng: number; lat: number; };
type LngLatLike = LngLat | { lon: number; lat: number; } | [number, number];

// CameraOption은 Camera 타입을 상속받으며 일부를 변경한 타입으로 만듦. 
interface Camera {
  center: LngLat;
  zoom: number;
  bearing: number;
  pitch: number;
}
interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
  center?: LngLatLike;
}
// CameraOptions는 Camera를 부분적으로 확장하고 있는 타입이다 
// Partial<Camera> : Partial 유틸리티 타입 ( 기존타입의 모든 속성을 옵셔널(선택적)하게 만든다 = Camera의 타입이 옵셔널로 )
// Omit<Partial<Camera>, 'center'> : Omit 유틸리티 타입 ( 지정된 속성을 제외한 타입을 생성=> Partial<Camera>에서 center를 제외한 타입 생성)
// CameraOptions extends Omit<Partial<Camera>, 'center'>:
//    = CameaOptions은 Partial<Camera>를 확장하니? 
//    = options가 Partial을 상속받고, camera가 추가적으로 있다
//    = options가 partial<Camera>의 부분집합이다.
// CameaOptions 타입은 Camera에서 center의 속성을 LngLatLike|undefined 로 받는 타입이 됨. 

// 위 타입과 동일한 동작, 그러나 반복을 줄이기 위해 Partial, Omit 사용
// interface CameaOptions{
//   center? : LngLatLike;
//   zoom? : number;
//   bearing? : number;
//   pitch?  : number;
// }


type LngLatBounds =
  {northeast: LngLatLike, southwest: LngLatLike} |
  [LngLatLike, LngLatLike] |
  [number, number, number, number];

declare function setCamera(camera: CameraOptions): void;
declare function viewportForBounds(bounds: LngLatBounds): Camera;

function focusOnFeature(f: Feature) {
  const bounds = calculateBoundingBox(f); // [number, number, number, number];
  const camera = viewportForBounds(bounds); // Camera 

  setCamera(camera);

  const {center: {lat, lng}, zoom} = camera;  // OK
  zoom;  // Type is number
  window.location.search = `?v=@${lat},${lng}z${zoom}`;
}