Window.addEventLIistener("scroll", function(){
    left navbar=
    document.getElementById("navbar");
    if(window.scrollY>50){
        navbar.style.background="blue";
    }
    else{
        navbar.style.background="black";
    }
});