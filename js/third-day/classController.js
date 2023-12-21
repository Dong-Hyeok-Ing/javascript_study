
$('p').css('display','none');

$('.add-btn').click(function (){
    $('div').addClass('active');
});

$('.remove-btn').click(function (){
    $('div').removeClass('active')
});

$('.toggle-btn').click(function (){
    $('div').toggleClass('active');
});