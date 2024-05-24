//  객체 생성 방법1
console.log("==============================객체 생성 방법 1")
const person = new Object();    //  인스턴스 생성
//  동적으로 속성(프로퍼티, 메서드) 동적으로 추가 가능
console.log(person);

person.name = "홍길동";
person.age = 28;
person.showInfo = function(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

console.log(person);
person.showInfo();

//  객체 생성 방법 2
console.log("===============================객체 생성 방법 2: JSON");
const person2 = {
    name: "홍길동",
    job: "도적",
    showInfo: function(){
        console.log(`Name: ${this.name}, Job: ${this.job}`);
    }
}

person2.showInfo();

console.log("==============================객체 생성 방법 3: Prototype 상속")
//  prototype 영역: 해당 객체를 이용해서 new 한 모든 인스턴스가 공유할 수 있는 공용 역영
//  함수를 기반으로 객체 설계도 구현
const Member = function(name, age){
    this.name = name;
    this.age = age;
};

const m1 = new Member("홍길동", 27);
const m2 = new Member("엄복동", 44);

console.log(m1);    console.log(m2);

m1.say = function(){
    console.log(`${this.name}가 당신에게 말을 겁니다..`);
}
m1.say();
console.log(m1);    console.log(m2);
//  m1의 생성자는 무엇인가?
console.log("m1의 생성자: ", m1.constructor);   //  Member
//  Member의 prototype 영역
console.log("Member의 프로토타입: ", Member.prototype);

Member.prototype.job = "도둑";

Member.prototype.showInfo = function(){
    console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
};

m1.showInfo();
m2.showInfo();
console.log("Member의 프로토타입: ", Member.prototype);

console.log(m1);

//  ES는 동적으로 속성을 추가할 수 있기 때문에
//  기존 객체에도 동적으로 속성 추가 가능;;

//  String 객체 - sayHi 메서드
String.prototype.sayHi = function(){
    return `안녕 ${this}~`;
}

const a = "기제";
console.log("기제".sayHi());    console.log(a.sayHi());