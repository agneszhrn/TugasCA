$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
        $(".navbar-ca").css("background" , "white");
        $(".nav-link").css("cssText" , "color: black !important;");
        $(".logo").css("display","none");
        $(".logo2").css("display","block");
        
        }
  
        else{
        $(".navbar-ca").css("background" , "transparent");
        $(".navbar-ca").css("box-shadow" , "none");
        $(".nav-link").css("cssText" , "color: white !important;");
        $(".logo2").css("display","none");
        $(".logo").css("display","block");  	
        }
    })
  })