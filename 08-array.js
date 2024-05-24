//  배열의 생성: 방법 1, new 키워드
const v1 = new Array(10);   //  10개짜리 배열
const v2 = new Array();     //  빈 배열
const v3 = new Array("String", 2024, true);     //  초기값이 있을 때,
//  어떤 객체들 (함수 포함) 들어감

console.log(v1, v1.length, typeof v1);
console.log(v2, v2.length, typeof v2);
console.log(v3, v3.length, typeof v3);

//  배열의 생성: 방법 2, 리터럴로 생성 - > 추천!
const v4 = [];
const v5 = ['red', 'green', 'blue', 'pink'];

console.log(v4, v4.length, typeof v4);
console.log(v5, v5.length, typeof v5);

//  ES 특성상 변수가 참조하는 객체의 type 체크가 필요
console.log(typeof v5);

//  주로 Array 판별 함수를 이용, 배열 여부를 판단
console.log("is v5 Array?", Array.isArray(v5));

//  ES의 경우 객체 속성도 배열 (맵)처럼 사용 가능
const person = {
    name: "홍길동",
    age: 28
};
console.log(person.name, person.age);
console.log(person['name'], person['age']);

//  ES 배열은 인덱스 범위를 엄격하게 체크하지 않음
//  인덱스 범위를 벗어난 접근도 허용함;;?

const v6 =[];
console.log(v6, v6.length);

v6[10] = 2034;
console.log(v6, v6.length);

console.log("========================================주요 메서드");
//  합치기: concat
const veges = ['양파', '감자', '당근', '피망', '파'];     console.log(veges, veges.length);
const sources = ['소금', '후추', '카레가루'];   console.log(sources, sources.length);

const currry = veges.concat(sources);
console.log(currry, currry.length);

//  join: 배열 내부 요소(아이템) 한 문장으로 합침
console.log(currry, "-> 카레 재료: ", currry.join(", "));