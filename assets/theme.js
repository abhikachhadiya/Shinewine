// ===================================

// #Lazyload




// #Lazyload ==============>
const Lazyimages = document.querySelector("img[lazyload]");

const lazyImg = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = Lazyimages.dataset.src;
}

const Imgobserver = new IntersectionObserver(function(entries,observe) {
  root: null,
  threshold: 0
});

Imgobserver.observe(Lazyimages);
