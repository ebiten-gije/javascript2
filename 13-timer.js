//  timer 관련 함수
//  특정 시간이 흐른 후에 특정 기능 수행;;
//  setTimeout(() => { }, milliseconds);

function timerTerst(){
    console.log("3초 후 인사합니다.");
    setTimeout(() => {
        console.log("안녕!")
    }, 3000);   //  3초
}
// timerTerst();

//  특정 시간 간격마다 특정 함수 실행
//  setInterval(() => { }, 실행 간격)
function interbalTest(){
    let count = 10;
    console.log("10초 후 타이머 종료");
    let timer = setInterval(() => {
        console.log(count--);
        if (count < 0) {
            console.log("종료");
            clearInterval(timer);
        };    //  타이머 제거
    }, 1000);
}
interbalTest();