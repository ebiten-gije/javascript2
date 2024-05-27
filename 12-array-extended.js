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
testEverySome();