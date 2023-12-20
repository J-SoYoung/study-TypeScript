/**
 * 사용할 때는 너그럽게, 생성할 때는 엄격하게
 * 매개변수 타입이 너무 넓으면 사용하기 편리하지만 
 * 반환 타입의 범위가 넓으면 불편하다. 
    => 아래 코드 예시는 타입이 생성될 때 너무 자유롭게 만들어졌기 때문에
    반환값 타입에서 문제가 발생한다.
 */

interface CameraOptions {
  center?: LngLat;
  zoom?: number;
  bearing?: number;
  pitch?: number;
}
type LngLat =
  { lng: number; lat: number; } |
  { lon: number; lat: number; } |
  [number, number];

type LngLatBounds =
  {northeast: LngLat, southwest: LngLat} |
  [LngLat, LngLat] |
  [number, number, number, number];

declare function setCamera(camera: CameraOptions): void;
declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;

type Feature = any;

declare function calculateBoundingBox(f: Feature): [number, number, number, number];

// 함수 선언부 ---------------------------------

function focusOnFeature(f: Feature) {
  const bounds = calculateBoundingBox(f);
  const camera = viewportForBounds(bounds);

  setCamera(camera);
  // amera의 타입인 cameraOptions의 타입 속성이 선택적이기 때문에 정확한 타입 추론이 어려워 ERror발생
  // const {center: {lat, lng}, zoom} = camera;
  // zoom;  // Type is number | undefined
  // window.location.search = `?v=@${lat},${lng}z${zoom}`;
}

