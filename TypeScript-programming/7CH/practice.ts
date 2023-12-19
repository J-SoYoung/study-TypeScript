type UserID = string
interface API {
    getLoggedInUserID() : UserID
    getFreidnIDs (userID: UserID): UserID[]
    getUserName (userID : UserID) : string
}

// class로 에러 객체를 생성해주면 에러를 구분할 수 있다.
// 하지만 interface로 에러를 커스텀하면, 런타임시에는 에러를 체크할 수 없다.
// interface InvalidUserIDError extends RangeError{}
class InvalidUserIDError extends RangeError{}
class InvalidFriendsError extends RangeError{} 

function login (user:UserID) {
    try{
        if(!user) {
            throw new InvalidUserIDError('등록한 회원이 아닙니다')
        }
        return getFriends(user)
    } 
    catch(e:any){
        console.error(e.message)
        return null 
    }
}

function getFriends (user:UserID) : UserID[]|null {
    let friends : UserID[] = ['thgml','thdud']
    try{
        if (user !== 'thdud'){
            throw new InvalidFriendsError('친구가 없습니다 ')
        }
        return friends
    }
    catch(e:any) {
        console.error(e.message)
        return null 
    }
}


let user:UserID = 'thdud'
console.log(login(user))