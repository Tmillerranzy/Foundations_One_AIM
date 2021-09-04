$(document).ready(function(){
    $('menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    });

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

});
