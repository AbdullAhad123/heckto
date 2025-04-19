var hero_tl = gsap.timeline();

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
var header = document.querySelector("#header");
header.addEventListener("mousemove", function (dets) {
    gsap.to(".gradient_cursor", {
        x: dets.x,
        y: dets.y,
        top: 0,
        left: 0,
        opacity:0.5,
        rotate: 360
    })
});


// nav timeline 
// openNav
// closeNav

var nav_tl = gsap.timeline();
var openNav = document.querySelector("#openNav");
var closeNav = document.querySelector("#closeNav");


openNav.addEventListener("click", function() {
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
        opacity:0,
        y: 60,
        duration: 0.2
    })
    
    nav_tl.from("#top_nav .top_nav_cta", {
        opacity:0,
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
    })
    
    nav_tl.from("#top_nav .top_nav_contact_btns", {
        opacity:0,
        y: 60,
        duration: 0.25,
        stagger: -0.2,
    })
});

closeNav.addEventListener("click", function() {
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

