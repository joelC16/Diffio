const races = document.querySelector(".races ul");
console.log(races.offsetWidth);

const extraWidth = races.offsetWidth / 5;

const bestProjects = document.querySelector(".bestProjects");

function getScrollAmount() {
  let racesWidth = races.scrollWidth;
  return -(racesWidth - window.innerWidth + extraWidth);
}

bestProjects.style.height = getScrollAmount();

const tween = gsap.to(races, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".racesWrapper",
  start: "top 20%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
  markers: false,
});

