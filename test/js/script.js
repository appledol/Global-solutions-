 $(document).ready(function () {


     $('.menu_icon').click(function () {
         $(this).siblings("nav").toggleClass('active-menu');
         $(this).toggleClass('active');
     });

     $('.slider').slick({
         infinite: true,
         arrows: true,
         dots: true,
         autoplay: false,
         speed: 2000,
         nextArrow: '<button class="next slick_arrow"></button>',
         prevArrow: '<button class="prev slick_arrow"></button>',
         slidesToShow: 1,
         slidesToScroll: 1,

     });
     
     $('.review__slider').slick({
         infinite: true,
         arrows: true,
         dots: false,
         autoplay: false,
         speed: 2000,
         nextArrow: '<button class="next slick_arrow"></button>',
         prevArrow: '<button class="prev slick_arrow"></button>',
         slidesToShow: 2,
         slidesToScroll: 1,

     });
     
     $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

        $('[data-equal]').each(function(){
            var $this = $(this),
                target = $this.data('equal');
            $this.find(target).equalHeights();
        });
     
     
     $('.condition__item').equalHeights();  
     $('.review__text').equalHeights(); 
 });
