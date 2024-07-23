
  
 
    setTimeout(async function() {
    const emblaNode = document.querySelector('.embla');
    if (emblaNode) {
      const options = { loop: false };
      const emblaApi = EmblaCarousel(emblaNode, options);
      console.log(emblaApi.slideNodes()); // Access API
    } else {
      console.error('Embla node not found');
    }
  }, 1000); // 1000ms delay, adjust as needed

  


