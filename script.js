// 이벤트 리스너를 추가할 요소를 선택합니다.
var item = document.getElementById("item1");

// 마우스를 가져다 대었을 때의 동작을 정의합니다.
item.addEventListener("mouseover", function( event ) {   
  var tooltip = this.querySelector(".tooltip");
  tooltip.style.visibility = "visible";
});

// 마우스를 떼었을 때의 동작을 정의합니다.
item.addEventListener("mouseout", function( event ) {   
  var tooltip = this.querySelector(".tooltip");
  tooltip.style.visibility = "hidden";
});