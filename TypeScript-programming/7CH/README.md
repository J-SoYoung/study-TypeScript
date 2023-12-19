### 연습문제
7장에서 배운 패턴 중 하나로 다음의 API의 에러를 처리하는 방법을 설계하라. <br>
사용자의 id로 로그인 한 다음 친구 목록을 가져오고 각 친구의 이름을 얻는다.<br>

```
  class API {
    getLoggedInUserID(): userID
    getFriendIDs(userID : userID): UserID[]
    getUserName(userID: userID) : string
  }
```


[:memo: error-handling][에러 처리 연습문제]

[error-handling]: /onebite-TypeScript/section01
