$(function () {
    
    $('.header__btn').on('click',function(){
        $('.rightside-menu').removeClass("rightside-menu_close")
    })
    $('.rightside-menu__close').on('click',function(){
        $('.rightside-menu').addClass("rightside-menu_close")
    })

    $('.top__slider').slick({
        dots:true,
        arrows:false,
        fade:true,
        autoplay:true
    });
    $('.contact-slider').slick({
        dots:true,
        arrows:false,
        slidesToShow:10,
        slidesToScroll:10
    });
    $('.article-slider__box').slick({
        prevArrow:'<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow-slide-left"></button>',
        nextArrow:'<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow-slide-right"></button>'
        
        
    });

})

var mixer = mixitup('.gallery__inner',{
   load: {
        filter: '.living'
    }
});