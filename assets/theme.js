// ===================================

// #Lazyload




// #Lazyload ==============>
// const Lazyimages = document.querySelector("img[lazyload]");

// // const lazyImg = (entries) => {
 
// // }

// const options = {};

// const Imgobserver = new IntersectionObserver(function(entries,Imgobserver) {
//    const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.src = Lazyimages.dataset.src;
// },options);

// Imgobserver.observe(Lazyimages);




// const Lazyimages = document.querySelectorAll("img[lazyload]");
// const Imgobserver = new IntersectionObserver(function(entries, Imgobserver){
//   entries.forEach(entry => {
//       console.log(entry,"hffhgfhgff");
//   });
// });

// // loop 
// Lazyimages.forEach( lazyloadImage => {
//   Imgobserver.observe(lazyloadImage);
// });