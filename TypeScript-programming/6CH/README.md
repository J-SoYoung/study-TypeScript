다음 각 타입 쌍에서 첫번째 타입을 두번째 타입에 할당할 수 있는지 정하고 그 이유를 말해보자. ( 서브타입과 가변성 관점에서 고민해보기 )<br>
A가 B에 할당할 수 있는가? = A는 B의 서브타입인가 <br>

- 1과 number<br>
  O : number리터럴 타입은 number의 하위 타입이 맞다. <br>
  
- number와 1<br>
  X : number리터럴 타입 1은 number를 하위 집합으로 둘 수 없다.<br>

- string과 number | string<br>
  O : string이 number|string보다 하위집합이기 때문에, 첫번째 타입을 두번째 타입에 할당할 수는 있다. 그 반대는 불가능하다<br>

- Boolean과 number<br>
  X : boolean과 number도 서로 부분집합 관계에 있을 수 없다 <br>
  
- number[]와 (number|string)[]<br>
  O : number[]가 (number|string)[]의 하위집합이다. 그러므로 첫번째 타입을 두번째 타입에 할당할 수 있다. <br>

- (number|string)[]과 number[]<br>
  X : 첫번째 타입이 두번째 타입의 상위집합이다. 그러므로 첫번째 타입을 두번째 타입에 할당할 수 없다. string[]을 포함할 수 없어 Error발생<br>

- {a:true}와 {a:boolean}<br>
  O : 첫번째 타입은 두 번째 타입의 하위집합이다. 서브집합을 물어보는 것이기 때문에, true는 boolean의 서브가 맞다.  
<br>

- {a: {b: [string]}}과 {a: {b: [number|string]}}<br>
  O : 첫번째 타입은 string만 들어있는 배열이므로 두번째에 string과 number가 들어잇는 배열 타입에 하위 집합으로 들어갈 수 있다 
<br>

- (a: number) => string과 (b:number)=> string<br>
  O : 같은 타입의 매개변수와 같은 타입의 반환값을 가지는 두 타입은 서로 호환가능하며 서로 슈퍼/서브타입을 할 수 있다 
<br>

- (a: number) => string과 (b:string)=> string<br>
  X : 매개변수 타입에서부터 number는 string의 하위 타입이 될 수 없다.<br>

- (a: number|string) => string과 (a:string)=> string<br>
  O : **함수가 다른 함수에 할당 가능하려면 각 매개변수의 타입은 다른 함수의 매개변수 타입과 같거나 더 상위 타입이어야 하며, 반환 타입은 다른 함수의 반환 타입과 같거나 더 하위 타입이어야 하기 때문데 된다.**