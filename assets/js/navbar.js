$(window).scroll(function(){
    $('.navbar').toggleClass('custom-navbar shadow py-0', $(this).scrollTop() > 50);
});