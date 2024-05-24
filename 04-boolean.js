//  boolean (true or false)
//  -   비교 연산의 결과
//  -   논리 연산의 결과
//  -   논리 조합 : and(&&), or(||), NOT(!)

let v1;
let v2 = null;
console.log(typeof v1, typeof v2);  //  undefined, object
//  undefined - 비어있는 것, 할당 자체가 되지 않은 것   - 자바스크립트가 사용
//  null - 비어있는 것, null 객체가 할당               -  개발자가 직접 할당하는 것
console.log(v2, typeof v2, v2 == null); //  null 체크: 객체 == null?

v2 = undefined; //  개발자가 임의로 undefined 상태로 설정하기도 함;;

console.log(v2, typeof v2, v2 == undefined);

//  ==  : 타입과 상관 없이 값을 비교
//  === : 타입과 값을 함께 비교

console.log(123 == "123");  //  true -> 값만 비교
console.log(123 === "123"); //  false -> number, String -> 값과 타입 비교

//  number, string의 값이 있으면 true, 값이 없으면 false
console.log(Boolean("JavaScript"), Boolean(""));        //  string
console.log(Boolean(2024), Boolean(0));                 //  number


console.log(true && "Test");    //  Test
console.log(false && "Test");   //  false

console.log(true || "test");    //  true
console.log(false || "test");   //  test