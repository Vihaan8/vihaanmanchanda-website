gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'bottom bottom',
    pin: true,
    pinSpacing: false
  });
});