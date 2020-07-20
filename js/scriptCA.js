$("#btn-portfolio").click(function() {
    $("#btn-portfolio").fadeOut(100);
    $("#portfolio-more").fadeIn(2000);
    $("#btnclose-portfolio").fadeIn(2000);
});

$("#btnclose-portfolio").click(function() { 
    $("#portfolio-more").fadeOut(10);
    $("#btnclose-portfolio").fadeOut(10);
    $("#btn-portfolio").fadeIn(1000);
});

$(document).ready(function() { 
    $(".menu-icon").on("click",function() {
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll",function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
        document.getElementById("logoca").innerHTML="<img src='https://www.cyberarmy.id/public/depan/img/logo_ca1.png' width='150px'>";
    }
    else {
        $('nav').removeClass('black');
        document.getElementById("logoca").innerHTML="<img src='https://www.cyberarmy.id/public/depan/img/logo_ca.png' width='150px'>";
    }
});

function langId() {
    let langs=['id','en'];
    let url='https://www.cyberarmy.id';
    let currentPath='/';
    let paths=currentPath.split('/');
    if(langs.includes('id')) {
        if(currentPath&&currentPath!=='') {
            if(paths.length>0) {
                if(langs.includes(paths[0])) {
                    let newPath=currentPath.substring(3);
                    if(newPath[newPath.length-1]==="/") {
                        newPath=newPath.substring(0,newPath.length-2);
                    }
                    window.location=url+"/id/"+newPath;
                }
                else {
                    if(currentPath[currentPath.length-1]==="/") {
                        currentPath=currentPath.substring(0,currentPath.length-2);
                    }
                    window.location=url+"/id/"+currentPath;
                }
            }
        }
    }
}

function langEn() {
    let langs=['id','en']; 
    let url='https://www.cyberarmy.id';
    let currentPath='/';
    let paths=currentPath.split('/');
    if(langs.includes('en')) {
        if(currentPath&&currentPath!=='') {
            if(paths.length>0) {
                if(langs.includes(paths[0])) {
                    let newPath=currentPath.substring(3);
                    if(newPath[newPath.length-1]==="/") {
                        newPath=newPath.substring(0,newPath.length-2);
                    }
                    window.location=url+"/en/"+newPath;
                }
                else {
                    if(currentPath[currentPath.length-1]==="/") {
                        currentPath=currentPath.substring(0,currentPath.length-2);
                    }
                    window.location=url+"/en/"+currentPath;
                }
            }
        }
    }
}