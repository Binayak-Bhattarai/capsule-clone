function preloader() {


  var tl = gsap.timeline();

  tl.to("#loader", {
    width: "100%",
    duration: 1.3,
    delay: 0.5,
    ease: "circ.inOut",
    onComplete: () => {
      document.querySelector("#capsule h3").textContent = "";
      document.querySelector("#loader").style.backgroundColor = "transparent";


    }
  });



  tl.to("#capsule", {

    height: "100%",
    width: "100%",
    duration: 0.7,
    ease: "power3.out",
    onComplete: () => {
      document.querySelector("#preloader").style.display = "none";
      


    }

  });

  tl.from("#page1 h1", {
    y: 50,
    autoAlpha: 0,
    duration:0.7,
    ease: "circ.inOut",
  })

  tl.from("#page1 h2", {
    opacity:0,
    left:"-30%",
    autoAlpha: 0,
    duration:0.7,
    ease: "circ.inOut",
  })

    tl.from("#page1 h4", {
       opacity:0,
    right:"-30%",
    autoAlpha: 0,
    duration:0.7,
    ease: "circ.inOut",
    onComplete:()=>{
      document.body.style.overflow = 'auto';
    }
  })

}

preloader();

gsap.registerPlugin(ScrollTrigger);

gsap.to("#page1 img", {
  scale: 1.3,
  scrollTrigger: {
    trigger: "#page1 img",
    scroller: "body",
    start: "top center",
    end: "bottom top",
    scrub:1
  }
});