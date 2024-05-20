gsap.from("#page1 #box",{
    scale:0,
    delay:0.2,
    duration:0.8,
    rotate:360,
    backgroundColor:"yellow",
    borderRadius:"50%",
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        markers:true,
        start:"top 70%",
        scrub:2
    }
})

gsap.from("#page2 #box",{
    scale:0,
    // delay:1,
    duration:0.8,
    rotate:360,
    backgroundColor:"red",
    borderRadius:"50%",
    // scrollTrigger:"#page2 #box"
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 70%",
        scrub:2
    }
})

gsap.from("#page3 #box",{
    scale:0,
    delay:0.2,
    duration:0.8,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    // scrollTrigger:"#page3 #box"
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:"true",
        start:"top 70%",
        scrub:2
    }
})