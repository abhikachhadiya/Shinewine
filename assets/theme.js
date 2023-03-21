// ===================================

// #Lazyload




// #Lazyload ==============>
const Lazyimages = document.querySelector("img[lazyload]");

const lazyImg = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = Lazyimages.dataset.src;
}

const Imgobserver = new IntersecctionObserver(lazyImg, {
  root: null,
  threshold: 0,
});

Imgobserver.observe(Lazyimages);
