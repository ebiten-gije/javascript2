function addItem(){
    //  ul#list에 child li를 추가하는 함수
    //  정제 하자
    let item = $("#item").val().trim();
    // console.log(item);

    if (item.length > 0){
        //  요소 만들기 -> 콘텐츠 설정 -> 속성 설정 -> DOM추가

        //  input#item 의 value -> li 생성 콘텐츠 설정
        let itemNode = $("<li>");   //  document.createElement
        itemNode.text(item);        //  .innerText
        //  ul#list에 child로 추가
        $("#list").append(itemNode);

        //  toolbar, 삭제버튼 추가
        let toolbar = $("<div>");
        let btnDel = $("<button>");
        btnDel.text("삭제");    //  콘텐츠 설정

        // toolbar.style.display = 'inline';
        toolbar.css({display: 'inline',
            float: 'right'
        }); //  여러 스타일 속성을 변경하려면 Js 객체로 전달

        toolbar.append(btnDel);
        itemNode.append(toolbar);

        btnDel.on("click", event => {
            let removeItem = $(event.target.parentNode.parentNode);
            //  부모를 몰라도 삭제 가능ㅇㅇ
            removeItem.remove();
        });

        //  입력 내용 비우고 focus
        $("#item").val("").focus();
    }
    

}
//  초기화
$(document).ready(event => {
    //  목록 비우기
    $("#list > li").remove();
    //  추가 버튼에 이벤트 리스너 연결
    $("#btn-add").on("click", addItem);

});