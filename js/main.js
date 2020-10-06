

//lesson 1 getting started
// // animate header down by 20 px for 1 second using the "to" tween
// // to sween specify the ending point, starts at the css position
// gsap.to('header', { duration: 1, y: 20 })

// // from tween specify the starting point and ends at the css position
// gsap.from('ul li', {
//   duration: 0.7,
//   x: -40,
//   ease: "power2.out",
//   stagger: 0.1,
// })

// //yoyo effect returns element to starting position
// gsap.to('ul li:last-child', {
//   duration: 0.7,
//   y: 40,
//   ease: "power2.out",
//   repeat: 1,
//   repeatDelay: 1,
//   yoyo: true,
//   yoyoEase: "bounce"
// })

// // "from to" tween specify the starting and the end, Completely bypassing css settings
// //first object specifies from, secong specifies to. all the extra parameters go into the second object. 
// gsap.fromTo(
//   'header',
//   { x: -40 },
//   { x: 40, repeat: 2, duration: 1, ease: 'power2.inOut', yoyo: true }
// )

// //"set" tween doesn't animate just moves element to the position indicated. 
// gsap.set('ul', { y: 100 });

//lesson two tween
//first demo
// gsap.from(
//   'body',
//   {
//     backgroundColor: 'white',
//     duration: 1.7,
//     ease: 'none'
//   })

// gsap.from(
//   ['h1', 'p'],
//   {
//     delay: 1.5,
//     duration: 0.6,
//     y: -20,
//     opacity: 0,
//     stagger: 0.2,
//     ease: 'power1.out'
//   })

// gsap.from(
//   ['img', 'h2'],
//   {
//     delay: 2.8,
//     opacity: 0,
//     duration: 0.7,
//     ease: 'none'
//   })

// gsap.from(
//   'ul li',
//   {
//     delay: 4,
//     opacity: 0,
//     y: -20,
//     stagger: 0.2,
//     duration: 0.6,
//     ease: 'power1.out'
//   });

//lesson 3 timelines
// declaring a timeline
const timeline = gsap.timeline({ duration: 1 });

//attaching tweens to timeline
timeline
  .from(
    'body',
    {
      backgroundColor: 'white',
      ease: 'none'
    }
  )
  .from(
    ['h1', 'p'],
    {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      ease: 'power1.out'
    }
  )
  .from(
    ['img', 'h2'],
    {
      opacity: 0,
      ease: 'none'
    }
  )
  .from(
    'ul li',
    {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      ease: 'power1.out'
    }
  );