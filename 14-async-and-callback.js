//  callback 처리
function logicA(){
    console.log("begin logic A");

    //  비동기
    setTimeout(() => {
        console.log('\tcallback A called')
        console.log('\tbegin logic B');

        //  비동기
        setTimeout(() => {
            console.log('\t\tcallback B called')
            console.log('\t\tbegin logic C');

            console.log('\t\tbegin logic C');
        }, 2000)

        console.log('\tend logic B');
    }, 2500)

    console.log("end logic A");
}
// logicA();

//  비동기 처리를 동기 방식처럼 호출하기 위해 마련된 객체 -> Promise
//  Pending, Fullfill, Reject
function logicPromise(){
    console.log('begin logicPromise');

    //  Promise 객체를 리턴해주여야 함
    return new Promise ((resolve, reject) => {
        //  resolve 함수 -> fullfill 상태로 지연시키는 역할
        //  reject 함수-> reject 상태로 이전시키는 역할
        console.log('begin logicPromise');

        //  비동기
        setTimeout(() => {
            //  내부 로직 수행
            // resolve('resolve');
            reject ('REJECTED');
        }, 3000)

        console.log('end logicPromise');
    })
    
}

function testLogicPromise(){
    console.log('Testlogic Promise');
     
    logicPromise()  //  Promise 를 반환하는 함수
    .then(value => {    //  Promise 내부에서 resolve 함수로 전달해 준 값 (fullfill값)
        console.log("Promise resolve: ", value);
    }).catch(reason => {    //  Promise 내부에서 reject 함수로 전달해준 값 (reject 상태로)
        console.log("Promise reject: ", reason);
    })
}

// testLogicPromise();


//  async / await
//  -> Promise 를 손쉽게 사용하기 위한 키워드
//  async 함수는 비동기 처리를 위해 Promise를 생성한다
async function f(){
    console.log('async function');
    return 1;
}
console.log(f());

//  가상 시나리오: 
//  네트워크 통신을 통해 데이터를 가져온다는 가정;;
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('서버로부터 들어온 데이터');
        }, 2000);
    })
}

async function processData(){
    console.log('데이터를 가져오는 중...');
    try{
        //  await 키워드: Promise가 해결될 때까지 코드를 일시 중지 시킴
        //                  Promise 해소되면 Promise의 결과값을 반환
        //  await 키워드 함수를 사용하기 위해선 async가 붙어있어야 함
        const data = await fetchData();
        console.log('가져온 데이터: ', data);
    }catch (error){
        console.error(error);
    }
}

processData();