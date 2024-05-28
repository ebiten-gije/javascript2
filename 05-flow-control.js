//  연습1
//  구구단 1~9

//  for
for(let a = 2; a < 10; a++){
    let c ="";
    for(let b = 1; b < 10; b++){
        c += String(a * b + "\t");
    }
    console.log(c);
}

//  while
let a = 1;
while(a < 10){
    let b = 1;
    let c = "";
    while(b < 10){
        c += String(a * b + " ");
        b++;
    }
    console.log(c)
    a++;
}

//  연습 2
//  역삼각형 그리기

// for문
for(let a = 1; a <= 5; a++){
    let c = "";
    for(let b = 5; b >= a; b--){
        c += '*';
    }    
    console.log(c);
}

//  while문
// let a = 1;
// while(a <= 5){
//     let c = "";
//     let b = 5;
//     while(b >= a){
//         c += '@';
//         b--;
//     }
//     console.log(c);
//     a++;
// }

//  TODO: for ...in, for ...of

// for ...in: 객체의 속성 키를 반복
const obj = {
    name: '홍길동', 
    age: 28,
    job: '도적'
}
for(let key in obj){
    console.log(`${key} -> ${obj[key]}`);
}
//  for ...of: 배열을 순회
const arr =[1, 2, 3, 4, 5];
for(let item of arr){
    console.log(item);
}
