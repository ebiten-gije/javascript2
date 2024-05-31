//  초기화 코드
window.addEventListener("load", event => {
    //  ul#list 로부터 자식 li 모두 삭제
    let cartItems = document.querySelectorAll("#list > li");
    console.log(cartItems);
/*
    let parent = document.getElementById("list");
    console.log(parent);
    //  자식 노드를 가지고 있는가?
    console.log("자식 유뮤? ", parent.hasChildNodes());
    //  자식 목록 확인
    console.log("자식 목록: ", parent.children);
*/
    for(let i = 0; i < cartItems.length; i++){
        let parent = cartItems[i].parentNode;
        // console.log(parent);

        parent.removeChild(cartItems[i]);
    }

    //  추가 버튼(#btn-add)에 이벤트 처리함수 연결해보기
    document.getElementById("btn-add")
        .addEventListener("click", addItem);
});

function addItem(){
    //  input#item 으로부터 value 속성 값을 가져옴
    const itemInput = document.getElementById("item");
    const item = itemInput.value.trim();

    if(item.length > 0){
        console.log("추가 아이템: ", item);

        //  추가할 요소 생성(li)
        let itemNode = document.createElement("li");
        itemNode.innerHTML = item;  //  contents 추가

        let toolbar = document.createElement("div");
        toolbar.style.display = "inline";
        toolbar.style.float = 'right';  //  cssFloat
        let btnDel = document.createElement("button");
        btnDel.innerText ="삭제";

        toolbar.append(btnDel);
        itemNode.append(toolbar);

        let container = document.getElementById("list");
        container.appendChild(itemNode);

        //  입력된 데이터를 삭제해주자
        itemInput.value = "";
        itemInput.focus();

        btnDel.addEventListener("click", event => {
            // console.log(event.target.parentNode.parentNode);
            let removeItem = event.target.parentNode.parentNode;
            container.removeChild(removeItem);

        })
    }
}