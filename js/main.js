$(function(){
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true)
    let smoother = ScrollSmoother.create({smooth: 2, effects: true});

    Splitting();

    //cursor
    var cursor = $(".cursor")

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        
        TweenMax.set(cursor, {
            css: {    
            left: mouseX,
            top: mouseY
            }
        });
    }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    $(".cursor-point").on("mouseenter", function() {
        cursor.addClass("active");
    });
    $(".cursor-point").on("mouseleave", function() {
        cursor.removeClass("active");
    });


    //loding effect 
    addEventListener('load',function(){
        $("body").removeClass("loading");
        $(".loading-wrap").on('transitionend', function(){
            $(this).css('display','none');
        });
    });

    //intro
    setTimeout(function() {
        $('.intro').addClass('active');
    }, 700);
    setTimeout(function() {
        $('.intro .packman').addClass('move');
    }, 1500);
    setTimeout(function() {
        $('.intro').addClass('hide');
    }, 3000);
    setTimeout(function() {
        $('.intro').addClass('none');
    }, 3700);
    setTimeout(function() {
        $('.sec01 .main-tit').addClass('active');
    }, 4000);
    //intro scroll 막기
    setTimeout(function() {
        $('body').removeClass('introScroll');
    }, 4000);


    //main
    var Title = gsap.timeline();
    
    Title.to(".main-tit .packman", {opacity:1, duration: 1})
        .to(".main-tit .packman", {className: "packman ani"}, "packman")
        .to(".main-tit h2:first-child .packman", {right: -100,  duration: 1} , "packman")
        .to(".main-tit h2:last-child .packman", {left: -100,  duration: 1} , "packman")
        .set({}, {}, "+=1") // add end time
        .to(".main-tit", {opacity:0, duration: 1})

        ScrollTrigger.create({
            animation: Title,
            trigger: ".sec01",
            start: "center center",
            end: "+=2000",
            toggleActions: "restart pause reverse pause",
            scrub: true,
            pin: true,
            // markers: true,
        });

    var sec02 = gsap.timeline();
    sec02.to(".sec02 .img", {opacity:1, duration: 1})
        .to(".sec02 .text .step01", {yPercent: 100})
        .to(".sec02 .text .step01", {opacity:1, yPercent: -50, duration: 2})
        .to(".sec02 .text .step01", {opacity:0, yPercent: -100})
        .to(".sec02 .text .step02", {opacity:0, yPercent: 100})
        .to(".sec02 .text .step02", {opacity:1, yPercent: -50, duration: 2})
        .to(".sec02 .text .step02", {opacity:0, yPercent: -100})
        .to(".sec02 .text .step03", {opacity:0, yPercent: 100})
        .to(".sec02 .text .step03", {opacity:1, yPercent: -50, duration: 2})
        .to(".sec02 .text .step03", {opacity:0, yPercent: -100})
        .to(".sec02 .img", {opacity:0, duration: 1})
        .set({}, {}, "+=1") // add end time

        ScrollTrigger.create({
            animation: sec02,
            trigger: ".sec02 .maxinner",
            start: "top top",
            end: "+=5000",
            toggleActions: "restart pause reverse pause",
            scrub: true,
            pin: true,
            // markers: true,
        });

        var sec03 = gsap.timeline();
        sec03.to(".text-horizontal", {xPercent:-118, duration: 1})

        ScrollTrigger.create({
            animation: sec03,
            trigger: ".text-horizontal",
            start: "top top",
            endTrigger: 'bottom bottom',
            end: "bottom bottom",
            pin: true,
            scrub: true,
            //markers:true
        });
});