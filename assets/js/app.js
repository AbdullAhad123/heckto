gsap.registerPlugin();

$(window).on('load resize', function () {
    const el1 = $(".big_wrapper_right");
    const el2 = $(".big_wrapper_left");
    const windowSize = $(window).width(); // Corrected here

    if (windowSize >= 2200) {
        el1.fadeIn();
        el2.fadeIn();
    } else {
        el1.fadeOut();
        el2.fadeOut();
    }
});

$(window).on('load', function () {
    var cardWidth = $(".portfolio_card").outerWidth(true); // better for spacing
    var transformSize = cardWidth * 5.5;

    gsap.to(".portfolio_section .portfolioCardsContainer", {
        duration: 6,
        x: `-${transformSize}px`,
        scrollTrigger: {
            trigger: ".portfolio_section",
            pin: true,
            scrub: 3,
        }
    });
});


$("#scrollToTop").click(function () {
    $(window).scrollTop(0)
})

$(window).on('load', function () {
    $("#scrollToTop").click();
})


$("#subscribe_btn").on('click', function () {
    const email = $("#subscribeInput").val();
    const errBox = $("#subscribeInputErr");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const button = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" class="btn_loading"><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg>`

    if (email == "") {
        $(errBox).removeClass('d-none').text('Invalid Email Address');
    } else if (!emailRegex.test(email)) {
        $(errBox).removeClass('d-none').text('Invalid Email Address');
    } else {
        $(errBox).addClass('d-none').text('');
    }

    if (email && emailRegex.test(email)) {
        $(this).html(button);
        $("#submitEmailForm").click();
    }

})

var swiper = new Swiper(".teamSwiper", {
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});