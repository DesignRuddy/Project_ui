
jQuery(document).ready(function(){
    $('.navi>li').mouseover(function(){        
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

      // .imgslide a:gt(0) : gt(index)은 index 값보다
  //  더 큰 값(Greater)을 가진 요소를 선택함.
  //  0번째부터 계수하여 index 값보다 큰 값을 가져옴.
  //  여기에서는 gt(0)이므로 1, 2, 3이 됨
  // 즉, 0보다 큰 인덱스는 hide() 메서드를 적용함.
  $('.imgslide a:gt(0)').hide();
  // setInterval(function(){}), 3000 : 일정시간마다 반복적으로
  // 동작을 실행하게 함. 3000은 3000ms(3초)는 3초마다 반복 실행함.
  setInterval(function(){
        // 가상클래스 선택자로 부모 요소가 가지고 있는 자식 요소 중
        // 첫번째를 선택함. imgslide의 자식요소 <a> 태그에서
        // 첫 번째를 선택하여 페이드아웃 실행함
         $('.imgslide a:first-child').fadeOut()
        // 다음 요소를 선택하여 페이드인 실행함
         .next('a').fadeIn()
        // 끝에다 appendTo()함수 내용을 붙여줌
        // 즉, 선택한 요소를 .imgslide 선택자 요소의
        // 자식 요소로 추가해줌. 3000ms 는 3초를 의미함.
         .end().appendTo('.imgslide');}, 80000);
});
