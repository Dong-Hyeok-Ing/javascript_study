
$('p').css('display','none');

$('.show-btn').click(function (){
   /*$('p').css({'display':'block'});*/
    /*$('p').show();*/
    $('p').slideDown();
});

$('.hide-btn').click(function (){
    /*$('p').css({'display':'none'});*/
    /*$('p').hide();*/
    $('p').slideUp();
});