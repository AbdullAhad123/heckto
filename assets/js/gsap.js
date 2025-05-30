gsap.registerPlugin();

var hero_tl = gsap.timeline();

hero_tl.from("#nav", {
    opacity: 0,
    y: -50,
    duation: 0.5
})

hero_tl.from("#hero h1 span", {
    y: 100,
    delay: 0.75,
    duration: 0.3,
    opacity: 0,
    stagger: 0.2,
    ease: "sine.out",
})

hero_tl.from("#hero p span", {
    y: 50,
    duration: 0.3,
    opacity: 0,
    stagger: 0.25
})

hero_tl.from("#hero #cta_link", {
    scale: 0,
    duration: 0.3,
    ease: "back.out"
})

hero_tl.from("header .scrollIndicator .scrollIndicatorCont", {
    y: 40,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
})


// mouse cursor 
var content = document.querySelector("#content");
content.addEventListener("mousemove", function (dets) {
    gsap.to(".gradient_cursor", {
        x: dets.x,
        y: dets.y,
        top: 0,
        left: 0,
        opacity: 0.5,
        rotate: 360
    })
});
var silder = document.querySelector("#overview")
silder.addEventListener("mouseenter", function () {
    gsap.to(".gradient_cursor", {
        scale: 0.15,
        opacity: 1
    })
});
silder.addEventListener("mouseleave", function () {
    gsap.to(".gradient_cursor", {
        scale: 1,
        opacity: 0.5
    })
});

var footer = document.querySelector("footer")
footer.addEventListener("mouseenter", function () {
    gsap.to(".gradient_cursor", {
        scale: 0.15,
        opacity: 1
    })
});
footer.addEventListener("mouseleave", function () {
    gsap.to(".gradient_cursor", {
        scale: 1,
        opacity: 0.5
    })
});


// nav timeline 
// openNav
// closeNav

var nav_tl = gsap.timeline();
var openNav = document.querySelector("#openNav");
var closeNav = document.querySelector("#closeNav");
var navbarItems = document.querySelectorAll(".navbar_link");


openNav.addEventListener("click", function () {
    $('html, body').addClass('overflow-hidden');
    $("#top_nav").toggleClass('overflow-y-hidden overflow-y-auto');
    nav_tl.to("#top_nav", {
        top: 0,
        duration: 0.5,
        ease: "power4.out",
    })

    nav_tl.to(".top_nav_container", {
        opacity: 1,
        duration: 0.1
    })

    nav_tl.from("#top_nav .navbar-brand", {
        opacity: 0,
        y: 60,
        duration: 0.2
    })

    nav_tl.from("#top_nav .top_nav_cta", {
        opacity: 0,
        y: 60,
        duration: 0.2,
        stagger: -0.15,
    })

    nav_tl.from("#top_nav .navbar_item", {
        duration: 0.5,
        opacity: 0,
        x: 200,
        stagger: -0.2
    })

    nav_tl.from("#top_nav .top_nav_contact .text_content ", {
        opacity: 0,
        duration: 0.3,
        y: 75,
        stagger: 0.2
    }, '1')

    nav_tl.from("#top_nav .top_nav_contact_btns", {
        opacity: 0,
        y: 40,
        duration: 0.25,
        stagger: -0.2,
    })

    nav_tl.from("#top_nav .bg_icon", {
        opacity: 0,
        y: 60,
        duration: 0.25,
    }, '1.2')
});

closeNav.addEventListener("click", function () {
    $('html, body').removeClass('overflow-hidden');
    $("#top_nav").toggleClass('overflow-y-auto overflow-y-hidden');
    nav_tl.to(".top_nav_container", {
        opacity: 0,
        duration: 0.3
    })
    nav_tl.to("#top_nav", {
        top: "-100%",
        duration: 0.5,
        ease: "power4.out",
    })
});


navbarItems.forEach(function (item) {
    item.addEventListener('click', function () {
        closeNav.click();
    });
});




// overview 
hero_tl.from(".overview_slider", {
    opacity: 0,
    duration: 1,
})

hero_tl.to(".overview_slides", {
    transform: "translateX(-100%)",
    duration: 140,
    ease: "none",
    repeat: -1,
})

// portfolio 

$(".portfolio_image").on("mouseenter", function () {
    const img = $(this).find('img');

    // Kill this element's leave animation
    const leaveAnimation = $(this).data('leaveAnimation');
    if (leaveAnimation) {
        leaveAnimation.kill();
        $(this).removeData('leaveAnimation');
    }

    // Kill this element's enter animation if already running
    const enterAnimation = $(this).data('enterAnimation');
    if (enterAnimation) {
        enterAnimation.kill();
    }

    const imgSize = $(img).attr('height');
    const transformSize = imgSize - 520;
    const duration = imgSize / 520;

    const newEnterAnim = gsap.to(img, {
        y: `-${transformSize}px`,
        duration: duration,
        ease: "power2.out"
    });

    $(this).data('enterAnimation', newEnterAnim);
});

$(".portfolio_image").on("mouseleave", function () {
    const img = $(this).find('img');

    // Kill this element's enter animation if running
    const enterAnimation = $(this).data('enterAnimation');
    if (enterAnimation) {
        enterAnimation.kill();
        $(this).removeData('enterAnimation');
    }

    const imgSize = $(img).attr('height');
    const duration = imgSize / 520;
    const halfDuration = duration / 2;

    const newLeaveAnim = gsap.to(img, {
        y: "0%",
        duration: halfDuration,
        ease: "power2.in"
    });

    $(this).data('leaveAnimation', newLeaveAnim);
});

// about 
var heading_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 65%",
    }
});

heading_tl.from("#about .sectionHeading span", {
    y: 250,
    opacity: 0,
    duration: 0.75,
    stagger: 0.3,
    ease: "power3.out"
});

heading_tl.from(".aboutCardCont .col-12", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8
})

// cta 
gsap.timeline({
    scrollTrigger: {
        trigger: "#callToAction",
        start: "top 25%",
        end: "bottom 33%",

        onEnter: () => {
            onEnterStying();
        },

        onLeave: () => {
            onLeaveStying();
        },

        onEnterBack: () => {
            onEnterStying();
        },

        onLeaveBack: () => {
            onLeaveStying();
        }
    }
});

function onEnterStying () {
    document.body.style.setProperty("background", "#B9F680", "important");
    document.documentElement.style.setProperty('--white', '#000000');
    document.documentElement.style.setProperty('--light_em', '#2d2d2d');
    document.documentElement.style.setProperty('--light_grad', '#1b1b1b');
}

function onLeaveStying () {
    document.body.style.setProperty("background", "black", "important");
    document.documentElement.style.setProperty('--white', '#ffffff');
    document.documentElement.style.setProperty('--light_em', '#dededecb');
    document.documentElement.style.setProperty('--light_grad', '#ddddddde');
}

var heading_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".ctaBox",
        start: "top 50%",
    }
});

heading_tl.from(".ctaBox .sectionHeading", {
    opacity: 0,
    x: 250,
    duration: 0.5,
});

heading_tl.from(".ctaBox .sectionText", {
    opacity: 0,
    x: 300,
    duration: 0.3
});

heading_tl.from(".ctaBox .sectionBtn", {
    opacity: 0,
    x: 200,
    duration: 0.25
});

heading_tl.from(".ctaBox .sectionImg", {
    opacity: 0,
    duration: 0.5
}, "0.75");


// portfolio 
var heading_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 30%",
    }
});

heading_tl.from("#portfolio .title_badge", {
    scale: 0,
    duration: 0.3,
    ease: "back.out"
});

heading_tl.from("#portfolio .sectionHeading", {
    x: -250,
    opacity: 0,
    duration: 0.75,
    stagger: 0.3,
    ease: "power3.out"
});

heading_tl.from("#portfolio .portfolio_section", {
    opacity: 0,
    y: 100,
    duration: 0.95,
    ease: "power3.out"
});


// services 
var heading_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#services_head",
        start: "top 30%",
    }
});

heading_tl.from("#services_head .title_badge", {
    scale: 0,
    duration: 0.3,
    ease: "back.out"
});

heading_tl.from("#services_head .sectionHeading span", {
    y: 250,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out"
});

heading_tl.from(".servicesCardCont .col-12", {
    y: 90,
    opacity: 0,
    duration: 0.75,
    stagger: 0.3,
    ease: "power2.out"
});

heading_tl.from(".servicesCardCont_1 .col-12", {
    y: 90,
    opacity: 0,
    duration: 0.75,
    stagger: 0.3,
    ease: "power2.out"
});

heading_tl.from(".servicesCardCont_2 .col-12", {
    y: 90,
    opacity: 0,
    duration: 0.75,
    stagger: 0.3,
    ease: "power2.out"
});

// team 



var heading_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#team",
        start: "top -65%",
    }
});

heading_tl.from("#team .title_badge", {
    scale: 0,
    duration: 0.3,
    ease: "back.out"
});

heading_tl.from("#team .sectionHeading", {
    x: 200,
    opacity: 0,
    duration: 0.75,
});

heading_tl.from("#team .swiper-slide", {
    y: 200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.12,
    ease: "power2.out"
});

// contact 
var heading_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top 30%",
    }
});

heading_tl.from("#contact .title_badge", {
    scale: 0,
    duration: 0.3,
    ease: "back.out"
});

heading_tl.from("#contact .sectionHeading", {
    x: -250,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
});

heading_tl.from("#contact .formSection .formItem", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
});


// footer 
var heading_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#footer",
        start: "top 30%",
    }
});

heading_tl.from(".footer_heading span", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.15,
});

heading_tl.from("#scrollBtnCont", {
    scale: 0,
    duration: 0.3,
    ease: "back.out"
}, "0.75");

heading_tl.from(".contactSection .contactSecItem", {
    opacity: 0,
    x: -150,
    duration: 0.6,
    stagger: 0.3,
    ease: 'back.out'
}, "0.5");

heading_tl.from(".subscribeSection .subscribeSecItem", {
    opacity: 0,
    x: 250,
    duration: 0.6,
    stagger: 0.3,
    ease: 'back.out'
});

heading_tl.from(".footerSocialCont .footerSocialItems", {
    opacity: 0,
    scale: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'back.out'
});

heading_tl.from(".copyrightText", {
    y: 50,
    opacity: 0,
    duration: 0.5,
});