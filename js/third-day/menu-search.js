$('.btn span').click(function (){
    $(this).addClass('active');
    /*siblings 형제 요소에 다른 태그까지 active 라는 클래스를 삭제 시킨다.*/
    /*$(this).siblings().removeClass('active');*/
    /*이럴경우 아래 처럼 태그를 넣어 준다. */
    $(this).siblings('.btn span').removeClass('active');

    $(this)
});

$('.menu li').mouseenter(function (){
   $(this).children().stop().slideDown();
});

$('.menu li').mouseleave(function (){
    $(this).children('.sub-menu').stop().slideUp();
});