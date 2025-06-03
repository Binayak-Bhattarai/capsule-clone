function preloader(){
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
}

preloader();

