// ===================================

// #Lazyload




// #Lazyload ==============>
    // const Lazyimages = document.querySelectorAll("img[lazyload]");
    // const Imgobserver = new IntersectionObserver(function(entries, Imgobserver){
    //   entries.forEach(entry => {
    //       if (!entry.isIntersecting) return;
    //       setTimeout(function(){
    //           entry.target.src = entry.target.dataset.src;
    //       },10000)
    //   });
    // });
    
    // Lazyimages.forEach( lazyloadImage => {
    //   Imgobserver.observe(lazyloadImage);
    // });