// animate header down by 20 px for 1 second using the "to" tween
// to sween specify the ending point, starts at the css position
gsap.to('header', { duration: 1, y: 20 })

// from tween specify the starting point and ends at the css position
gsap.from('ul li', {
  duration: 0.7,
  x: -40,
  ease: "power2.out",
  stagger: 0.1,
})

//yoyo effect returns element to starting position
gsap.to('ul li:last-child', {
  duration: 0.7,
  y: 40,
  ease: "power2.out",
  repeat: 1,
  repeatDelay: 1,
  yoyo: true,
  yoyoEase: "bounce"
})