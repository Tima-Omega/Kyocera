$(document).ready(function () {
    /* const swiper = new Swiper('.video__slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 100,
        
        simulateTouch: false,
        autoHeight: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
                autoHeight: false,
            },
            1200: {
                slidesPerView: 'auto',     
            }
        }
    }); */

    const swiperVideo = new Swiper('.video-slider', {
        slidesPerView: 'auto',
        parallax: {
            enabled: true,
            scale: 1
        },
        // spaceBetween: 100,
        // effect: "coverflow",
        // coverflowEffect: {
        //     rotate: 0,
        //     stretch: 0,
        //     depth: 0,
        //     scale: .5,
        //     modifier: 1,
        //     slideShadows: false
        // },
        // effect: "creative",
        // creativeEffect: {
        //     prev: {
        //       translate: ["-100%", 0, -500],
        //     },
        //     next: {
        //       translate: ["150%", 0, -500],
        //     },
        //   },
        navigation: {
            nextEl: '.video-next',
            prevEl: '.video-prev',
        },
        pagination: {
            el: '.video-pagination',
            type: 'fraction',
        },
        
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
                initialSlide: 0,
            },
            1200: {
                // spaceBetween: 100,
                // spaceBetween: -175,
                centeredSlides: true,
                slidesPerView: 'auto',
                initialSlide: 1,  
            }
        }
    });

    const swiper3 = new Swiper('.model__bottom', {
        freeMode: true,
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        breakpoints: {
            576: {
                spaceBetween: 68
            }
        }
    });
    const swiper2 = new Swiper('.model__slider', {
        simulateTouch: false,
        thumbs: {
            swiper: swiper3,
        },
    });
    $('.video-slider').click(function () {
        $('.overlay').fadeIn();
        $('.player').fadeIn();
        $('body').css('overflow', 'hidden');
        $('body').css('padding-right', '20px');

    });
    $('.model__btn-1').click(function () {
        $('.overlay').fadeIn();
        $('.popup-1').fadeIn();
        $('body').css('overflow', 'hidden');
        $('body').css('padding-right', '20px');
    });
    $('.model__btn-2').click(function () {
        $('.overlay').fadeIn();
        $('.popup-2').fadeIn();
        $('body').css('overflow', 'hidden');
        $('body').css('padding-right', '20px');
    });
    $('.model__btn-3').click(function () {
        $('.overlay').fadeIn();
        $('.popup-3').fadeIn();
        $('body').css('overflow', 'hidden');
        $('body').css('padding-right', '20px');
    });
    $('.model__btn-4').click(function () {
        $('.overlay').fadeIn();
        $('.popup-4').fadeIn();
        $('body').css('overflow', 'hidden');
        $('body').css('padding-right', '20px');
    });
    $('.model__btn-5').click(function () {
        $('.overlay').fadeIn();
        $('.popup-5').fadeIn();
        $('body').css('overflow', 'hidden');
        $('body').css('padding-right', '20px');
    });
    $('.model__btn-6').click(function () {
        $('.overlay').fadeIn();
        $('.popup-6').fadeIn();
        $('body').css('overflow', 'hidden');
        $('body').css('padding-right', '20px');
    });
    $('.model__btn-7').click(function () {
        $('.overlay').fadeIn();
        $('.popup-7').fadeIn();
        $('body').css('overflow', 'hidden');
        $('body').css('padding-right', '20px');
    });
    $('.overlay').click(function () {
        $(this).fadeOut();
        $('.popup').fadeOut();
        $('.player').fadeOut();
        $('.player__video').get(0).pause();
        $('body').css('overflow', 'auto');
        $('body').css('padding-right', '0px');

    });
    $('.popup__close').click(function () {
        $('.overlay').fadeOut();
        $('.popup').fadeOut();
        $('.player').fadeOut();
        $('.player__video').get(0).pause();
        $('body').css('overflow', 'auto');
        $('body').css('padding-right', '0px');

    });
    $('.popup__trigger').click(function () {
        $(this).next('.popup__info').slideToggle();
        $(this).find('.popup__btn').toggleClass('active');
    });
    $('.form').validate({
        focusCleanup: true,
        rules: {
            mail: {
                required: true,
                email: true,
            },
            surname: {
                required: true,
                lettersonly: true,
            },
            name: {
                required: true,
                lettersonly: true,
            },
            comp: {
                required: true,
            },
            post: {
                required: true,
                lettersonly: true,
            },
            num: {
                required: true,
                digits: true,
            },
            check: {
                required: true,
            }
        },
        errorPlacement: function (error, element) {
            return true;
        },
        highlight: function(element) {
            $(element).addClass("error");
        },
        unhighlight: function(element) {
            $(element).removeClass("error");
        }
    });
    jQuery.validator.addMethod('lettersonly', function (value, element) {
        return this.optional(element) || /^[а-я, a-z]+$/i.test(value);
    });

    $('.burger').click(function () {
        $('.burger__list').toggleClass('active');
    });

    $(".form__term").click(function() {
        const checkBoxes = $(".form__checkbox");
        checkBoxes.prop("checked", !checkBoxes.prop("checked"));
    });

    

    wow = new WOW({
        boxClass: 'animation',
        offset: 300
    });

    wow.init();

    function submit(e) {
        e.preventDefault();
        let formData = $(this).serializeArray(),
            formUrl = $(this).attr('action'),
            formMethod = $(this).attr('method');
        formData.forEach(function (item) {
            data.result[item.name] = item.value;
        });
        $.ajax({
            url: formUrl,
            type: formMethod,
            dataType: 'JSON',
            data: data.result,
            success: function (response) {
                let result = $.parseJSON(response);
                console.log(result);
                clear();
            },
            error: function () {
                console.log('Ошибка. Данные не отправлены.');
            },
        });
    }
});
