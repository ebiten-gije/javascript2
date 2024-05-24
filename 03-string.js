//  String
const s1 = "Morden JavaScript and Java";    //  리터럴
const s2 = String("Morden JavaScript and Java");    //  타입 함수 이용 생성
console.log(typeof s1, typeof s2);

//  .length 문자열 길이 확인하는 속성
console.log("String: ", s1, ", length: ", s1.length);

//  문자열 추출 메서드
console.log(s1.charAt(7));  //  특정 인덱스에 위치한 문자: charAt
//  ES는 문자열도 배열처럼 처리함ㅋㅋ;;
console.log(s1[7]);

console.log(s1.substr(7, 10));  //  7번 인덱스부터 10개의 문자 추출 -deprecated
console.log(s1.substring(7, 17));   //  7번부터 17번까지
console.log(s1.substring(7));   //  7번부터 끝까지

//  문자열 검색
let position;   position = s1.indexOf("Java");
console.log("first search: ", position);
position += 4;
position = s1.indexOf("Java", position);    //  검색어, 시작위치
console.log("second search: ", position);

console.log("No keywords: ", s1.indexOf("java"));    //  -1: 찾는 검색어 없음
console.log(s1.lastIndexOf("Java"));    //  검색 방향 뒤에서부터

//  문자열 치환
console.log(s1.replace("JavaScript", "JS"));    //  검색어, 바꿀 문자열
console.log(s1);    //  내부 데이터를 변경하는 것이 아닌 변경된 문자열 새로 생성 반환

//  변경 데이터를 뒤에서도 사용하려면 재할당 필요
const s1_changed = s1.replace("JavaScript", "JS");
console.log(s1, s1_changed);

//  화이트 스페이스(공백, tab, 개행 통칭) 제거
console.log("    Need to be trimmed         ".trim());
const s3 = "    Need to be trimmed         ";
console.log(s3.trim());
const s3_trim = s3.trim();
console.log(s3, s3_trim);

//  ES  String 보충
//  이스케이프  ->  키보드로 입력 불가능하거나, 특수한 의미를 가진 문자 (\)
//  \n: 개행,   \t: 탭,     \': '
//  \":",   \`: 백틱?,  \$: 탬플릿 문자열

let message = 'he said, "Hello"';
console.log(message);
message = "He said, \"hello\"";
console.log(message);

message = "I'm going";
console.log(message);
message = 'I\'m going';
console.log(message);

// 여러 줄 문자열
message = "예전에는 \n여러 줄 문자열을 만드는 것이 \n쉽지 않았다고 합니다.";
console.log(message);

message = `하지만 ES6 이상에서는
아주 손쉽게
여러 줄 문자열을 
만들 수 있다고 합니다`
console.log(message);

console.log("=========================================== Template 문자열");
let temp = 24;
message = "현재 실내 온도는 " + temp + "도입니다";
console.log(message);

//  $(변수명) or $(연산식) -> 실행결과가 문자열에 포함됨
message = `현재 실내 온도는 ${temp}도 입니다`;
console.log(message);