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

console.log("-----------------------------------------push, pop")
//  push, pop -> Stackk 자료형처럼 활용 가능
//  Stack : Last Input First Output (LIFO자료형)
let fruits = [];
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carot"), fruits);
//  인출: pop -> 배열의 뒤에서부터
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);

console.log("-------------------------------------------push, shift")
//  push, shift -> queue 자료형처럼 활용 가능
//  queue: First input First Output (FIFO 자료형)
console.log(fruits);
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carrot"), fruits);
//  shift: 배열의 첫 요소를 인출, 삭제
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);

console.log("---------------------------------------splice")
//  splice: 배열 요소 인출 후 삭제, 추가를 동시에 할 수 있는 메서드
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
//  인수가 1개 -> 시작 인덱스, 끝까지 추출
console.log(fruits.splice(2));
console.log(fruits);

fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
//  인수가 2개 -> 시작 인덱스, 갯수
console.log(fruits.splice(2, 1));
console.log(fruits);

fruits = ["Apple", "Banana", "Carot", "Durian"];
console.log(fruits);
//  인수가 3개 -> 시작 인덱스, 갯수 삭제, 해당 위치에 새로운 요소 추가
console.log(fruits.splice(2, 1, "Mango", "Kiwi"));
console.log(fruits);


console.log("---------------------------------reverse, slice")
//  reverse, slice
//  reverse: 순서 반전
fruits = ["Apple", "Banana", "Carot", "Durian"];
console.log(fruits);
fruits.reverse();
console.log(fruits);
//  slice: 배열의 요소 추출, 새 배열로 만듬ㄹ
console.log(fruits);
let slice = fruits.slice(1, 3); //  원본 배열은 유지
console.log(slice);
console.log(fruits);

//  split: 특정 구분자를 기준으로 문자열을 분리 -> 배열로 생성
const str = "JavaScript is comething strange than other languages";
let chunks = str.split(" ");
console.log(chunks);

console.log("========================================sort");
fruits = ["Banana", "Mango", "Apple","Durian", "Kiwi", "Orange"];
console.log(fruits);
console.log(fruits.sort()); //  기본적으로 오름차순
//  정렬 규칙을 정하고자 할 때: 정렬 기준 함수 매개변수로 전달 해줘야함
fruits = ["Banana", "Mango", "Apple","Durian", "Kiwi", "Orange"];
console.log(fruits);
fruits.sort((v1, v2) => {
    //  키 함수: 두 개의 요소의 선후 관계를 결정해 줌
    //  리턴 값
    //  음수: -> v1이 앞에 온다
    //  양수: -> v1이 뒤에 (v2가 앞에)
    //  0: -> 순서 그대로 (우선 순위가 같다)
    if(v1 < v2) return 1;
    if(v1 > v2) return -1;
    if(v1 == v2) return 0;
});
console.log(fruits);

fruits.sort((v1, v2) => {
    return v1.length - v2.length;
});
console.log("문자열 길이로: ",fruits);