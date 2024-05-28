//  forEach : 배열 내부 요소들을 하나씩 추출, 골백 함수로 전달
function testForEach(){
    console.log("================================================testForEach");
    let source = ["Apple", "Banana", "Mango", "Orange", "Durian"];

    console.log("----요소들만 전달");
    source.forEach(item => {
        console.log(item);
    });

    console.log("----요소와 함께 인덱스 전달");
    source.forEach((item, index) => {
        console.log(`${index} -> ${item}`);
    })

    console.log("----요소, 인덱스와 함께 배열 자체도 전달");
    source.forEach((item, index, arr) => {
        console.log(`${index} -> ${item}`, arr);
    })
}
// testForEach();

function testEverySome(){
    console.log("=================================================testEverySome");
    let data = [
        {name: "홍길동", age: 28},
        {name: "장길한", age: 38},
        {name: "전우치", age: 25}
    ];
    console.log("원본데이터: ", data);

    //  data 내부의 모든 객체의 나이가 25세 초과하는지 검증?
    let result = data.every(obj => {
        return obj.age > 25;    //  검증 로직
    })
    console.log("모든 인물이 25세 초과일까? ", result);

    //  data 내부의 일부 객체의 나이가 25세 초과함?
    result = data.some(obj => obj.age > 25);
    console.log("25세 초과하는 사람 있어? ", result);
}
//testEverySome();

//  데이터처리 파이프라인
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const source = [12, 4, 19, 33, 86];
//  map -> filter -> sort -> reduce

function testMap(){
    console.log("---- map");
    //  numbers 배열의 모든 요소를 2배로
    //  기존 방식 구현
    let multiply = [];
    for (i = 0; i < numbers.length; i++){
        multiply.push(numbers[i] * 2);
    }
    console.log("기존 방식: ", multiply);
    //  map - 형태는 그대로, 내부 요소만을 조작;;
    let result = numbers.map(item => item * 2);
    console.log("원본 배열: ", numbers);
    console.log("*2 배열: ", result);
}
// testMap();

function testFilter(){
    console.log("---- filter");
    //  filter: 내부 요소는 그대로, 조건을 만족하는 요소만 뽑아서 새 배열 생성
    //  numbers 배열의 요소 중 짝수만 필터링
    let result = numbers.filter(item => item % 2 == 0);
    console.log("원본 배열: ", numbers);
    console.log("짝수 배열: ", result);
    console.log("3의 배수: ", numbers.filter(item => item % 3 == 0));
    
    let filtering = [];
    for(i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 == 0){
            filtering.push(numbers[i]);
        }
    }
    console.log(filtering);
}
// testFilter();

function testReduce(){
    console.log("---- Reduce");
    console.log("원본 배열: ", source);
    //  source 배열의 내부 요소를 모두 합산
    let sum = source.reduce((acc, vlaue, idx, source) => {
        console.log(`이전 값: ${acc}`);
        console.log(`${source}의 ${idx +1}번째 요소는 ${vlaue}입니다`);
        return acc + vlaue; //  ->  다음번 콜백의 acc 매개변수로 전달;;
    }, 0)   //  (acc, value, index, arr), 초기값
    console.log("합산 결과: ",sum);
}
// testReduce();

function testReduce2(){
    //  반복되는 모든 것에는 reduce 함수를 적용할 수 있다
    //  map 함수의 기능을 reduce 함수로 구현해 봄;;
    //  testMap 함수의 기능을 reduce 함수로 작성 (요소*2);;
    console.log(numbers);
    let result = numbers.reduce((acc, value) => {
        console.log(`acc: ${acc}, value: ${value}`);
        acc.push(value * 2);
        return acc;
    }, []);

    console.log(result);
}
// testReduce2();

function testReduce3(){
    //  reduce 함수를 이용해서 filter 함수 구현
    let filtering = numbers.reduce((acc, value) => {
        if (value % 2 == 0) acc.push(value);
        return acc;
    }, [])

    console.log(filtering);
}
// testReduce3();

const data = [
    {name: '철수', kor: 85, eng: 92, math: 88},
    {name: '영희', kor: 70, eng: 74, math: 95},
    {name: '지호', kor: 91, eng: 89, math: 85},
    {name: '지수', kor: 65, eng: 70, math: 72},
    {name: '디카프리오', kor: 80, eng: 90, math: 91}
];

function testDataPipeline(){
    console.log("---- map, filter, sort, reduce test");
    console.log("원본 데이터: ", data);

    //  map함수 이용 -> total 파생 변수 생성
    let studentsWithTotal = data.map(value => ({
        ...value, 
        total: value.kor + value.eng + value.math
    }))
    console.log(studentsWithTotal);

    //  filter 함수 이용-> total >= 240만 추출
    const filteredStudent = studentsWithTotal.filter(student => 
        student.total >= 240)
    console.log("총점 240점 이상: ", filteredStudent);

    //  sort 함수를 이용 -> 총점 기준 정렬
    // const sortedStudent = filteredStudent.sort((a, b) => a.total - b.total); //asc
    const sortedStudent = filteredStudent.sort((a, b) => b.total - a.total);    //  desc
    console.log("total순 정렬: ", sortedStudent);

    //  reduce 함수 이용 -> 학생들의 총점 평균
    const totalSum = sortedStudent.reduce((acc, value) => 
        acc += value.total, 0)
    console.log("총점 240점 이상 학생들의 총점: ",totalSum);

    const avgTotal = totalSum / sortedStudent.length;
    console.log(avgTotal);

    console.log("데이터 파이프라인 구축: ", 
        data.map(value => ({
            ...value, total: value.kor + value.eng + value.math})).filter(
                student => student.total >= 240).sort(
                    (a, b) => b.total - a.total).reduce((
                        acc, value) => acc += value.total, 0)
    )
}
testDataPipeline();