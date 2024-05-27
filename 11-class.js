//  클래스
class Shape {
    //  static -> 모든 인스턴스가 공유, new를 하지 않아도 접근 가능한 코드 영역
    static create (x, y) {
        return new Shape(x, y);
    }
    name = 'Shape'; //  ES7부터 등장한 확장 표현
    //  생성자
    constructor(x, y) {
        this.name = 'Shape';    //  속성: ES6~ 등장
        this.move(x, y);
    }
    //  메서드 
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area(){
        return 0;
    }
}

console.log(Shape);

//  상속
class Circle extends Shape{
    //  Shape으로부터 x, y 를 상속
    //  radius 만 추가로 선언
    constructor(x, y, radius){
        super(x, y);    //  부모 생성자 -> 물려받은 필드 초기화
        this.radius = radius;
    }
    area(){
        if(this.radius === 0)
            return super.area();
        return this.radius ** 2 * Math.PI;
    }
}

let s = new Shape(10, 20);
console.log(s, s.area());
let c = new Circle(1, 0, 4);
console.log(c, c.area());