/**
 * string보다 더 구체적인 타입을 사용하자 
 * string과 any는 비슷한 문제를 가지고 있다. 
 * 따라서 잘못 사용하게 되면 무효한 값을 허용하고 타입간의 관계를 감출 위험이 있다
 */
function pluck<T, K extends keyof T>(record: T[], key: K): T[K][] {
  console.log(record.map(r => r[key]))
  return record.map(r => r[key]);
}
type RecordingType = 'studio' | 'live';

interface Album {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType;
}

let albums: Album[] = [
  { artist: 'Artist1', title: 'Album1', releaseDate: new Date(), recordingType: 'studio' },
  { artist: 'Artist2', title: 'Album2', releaseDate: new Date(), recordingType: 'live' },
];

pluck(albums, 'releaseDate'); // Type is Date[]
pluck(albums, 'artist');  // Type is string[]
pluck(albums, 'recordingType');  // Type is RecordingType[]
// pluck(albums, 'recordingDate');
           // ~~~~~~~~~~~~~~~ Argument of type '"recordingDate"' is not
           //                 assignable to parameter of type ...


