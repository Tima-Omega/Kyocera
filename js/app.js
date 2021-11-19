$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 100,
        simulateTouch: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    });
	$('.overlay').click(function () {
		$(this).fadeOut();
		$('.popup').fadeOut();
		$("body").css("overflow", "auto")
	});
	$('.popup__close').click(function () {
		$('.overlay').fadeOut();
		$('.popup').fadeOut();
		$("body").css("overflow", "auto")
	});
	$('.popup__trigger').click(function() {
		$(this).next('.popup__info').slideToggle();
		$(this).find('.popup__btn').toggleClass('active')
	});
	$('.form').validate({
		focusCleanup: true,
		rules: {
            mail: {
                email: true,
            },
            surname: {
                minlength: 5,
            },
			num: {
				number: true
			},
			name: {
				minlength: 2,
			},
			comp: {
				minlength: 2,
			},
			post: {
				minlength: 2,
			}
        },
		errorPlacement: function(error, element) {
			return true;
		}
	})
	$('.burger').click(function(){
		$('.burger__list').toggleClass('active')
	})
});
