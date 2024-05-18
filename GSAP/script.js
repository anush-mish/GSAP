// gsap.to("#box1",{

    // x:1000,
    // duration:2,
    // delay:1,
    // backgroundColor:"yellow",
    // borderRadius:"50%",
    // rotate:360,
    // scale:0.5,
    // repeat:1,//infinite repeat => -1
    // yoyo:true
// })

// gsap.from("h1",{
//     y:20,
//     delay:2,
//     duration:1,
//     stagger:0.5,
//     opacity:0
// })
// var tl=gsap.timeline();
// tl.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"yellow",
//     borderRadius:"50%",
//     rotate:360,
//     scale:0.5,
//     repeat:1,//infinite repeat => -1
//     yoyo:true
// })

// tl.to("#box2",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"red",
//     borderRadius:"50%",
//     rotate:360,
//     scale:0.5,
//     repeat:1,//infinite repeat => -1
//     yoyo:true
// })

// tl.to("#box3",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     rotate:360,
//     scale:0.5,
//     repeat:1,//infinite repeat => -1
//     yoyo:true
// })

var tl=gsap.timeline();

tl.from("h2",{
    opacity:0,
    y:-20,
    duration:0.5,
    delay:0.2
})

tl.from("h4",{
    opacity:0,
    y:-20,
    duration:0.5,
    delay:0.2,
    stagger:0.2
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2

})