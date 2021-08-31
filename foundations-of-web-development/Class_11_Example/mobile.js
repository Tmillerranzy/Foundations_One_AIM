$(function (){
    $("#mobile-menu").click(function(){
        $("nav").toggleClass("show");
    });
    $("nav > a").click(function(){
        $("nav").removeClass("show");
    });

});