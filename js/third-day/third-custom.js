
$('p').css('display','none');

$('.show-btn').click(function (){
    $('div').fadeIn('fast'/*이곳에는 지속시간을 입력*/);
});

$('.hide-btn').click(function (){
    $('div').fadeOut('slow');
});

$('.toggle-btn').click(function (){
    $('div').fadeToggle(1000);
});