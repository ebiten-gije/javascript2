//  페이지 초기화
        //  window.addEventListener("load", callback)
$(document).ready(event => {
    // console.log(document);
    // console.log($(document));   //  jQuary Wrapper
    function testAttribute(){
        //  #main-image 요소 선택
        let mainImage = $("#main-image");
        console.log(mainImage);

        //  속성 목록 확인
        //  jQuary 포장 Unwrapping
        console.log(mainImage[0].getAttributeNames());

        //  title 속성 조회
        console.log("title: ", mainImage.attr("title"));
        //  title 속성 변경
        mainImage.attr("title", `제품: ${mainImage.attr("title")}`);
        
        //  products의 title 속성도 변경
        let subs = $(".sub-image");
        console.log(subs);

        for(let i = 0; i < subs.length; i++){
            $(subs[i]).attr("title", "제품: " + $(subs[i]).attr("title"));
        }
    }
    // testAttribute();

    //  jQuary Event 
    //  #main-image에 click 이벤트 처리기 연결
    //  메서드를 이용한 이벤트 연결
    // $("#main-image").click(function(event) {
    $("#main-image").click(event => {
        // console.log(event);
        //  JavaScript 함수의 this는 해당 함수를 호출한 객체를 의미
        // let mainImage = this;   //  == event.target(jQuary의 this)
        let mainImage = event.target;
        // console.log(mainImage);
        alert("메인 이미지 클릭");
    });

    let products = $(".sub-image");
    console.log(products);
    //  집합 객체도 루프를 돌리지 않고 이벤트 붙이면,
    //  하위 요소들에게 공통적으로 연결.....
    //  가장 추천하는 이벤트 연결 방법: on
    products.on("click", event => {
        //  클릭한 객체 (target) 의 title과 src속성을 #main-image로
        let obj = $(event.target); //  event발생 객체
        $("#main-image").attr({
            src: obj.attr("src"),
            title: obj.attr("title")
        });

        $("#product-info > h2").text(obj.attr("title"));
    });

    $("#keyword").on("keydown", event => {
        // let message = event.target.value;
        // console.log(message);
        $("#btn-search").text('검색: ' + /*message*/event.target.value)
    })

});