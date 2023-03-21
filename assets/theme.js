// ===================================

// #Lazyload




// #Lazyload ==============>
const Lazyimages = document.querySelector("img[lazyload]");

// const lazyImg = (entries) => {
 
// }

const Imgobserver = new IntersectionObserver(function(entries,Imgobserver) {
   const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = Lazyimages.dataset.src;
});

Imgobserver.observe(Lazyimages);
