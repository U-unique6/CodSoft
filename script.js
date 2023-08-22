let navshow=document.querySelector(".navlist");
function showmenu(){
    navshow.style.right="0";
}
function hidemenu(){
    navshow.style.right="-250px";
}

// owl carousel 
$(".carousel").owlCarousel({
    margin:30,
    loop:true,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        
        },
        600:{
            items:2,
            nav:false,
           
        },
        1000:{
            items:3,
           nav:false
        }
    }
})