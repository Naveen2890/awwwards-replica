const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const t1=gsap.timeline()
t1.to("#page1",{y:"150vh",scale:0.5,duration:0,delay:1})
t1.to("#page1",{y:'30vh',scale:0.5,duration:1,delay:1})
t1.to("#page1",{y:"0vh",rotate:360,duration:1,scale:1})

  
  
  
  
  