(function() {
    "use strict";
  
    // Remove the preloader once the page has loaded
    window.addEventListener('load', () => {
      let preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.remove();
      }
    });
  
    // If you have the "typed" text effect on the hero section:
    let typedElement = document.querySelector('.typed');
    if (typedElement) {
      let typedStrings = typedElement.getAttribute('data-typed-items');
      if (typedStrings) {
        typedStrings = typedStrings.split(',');
        new Typed('.typed', {
          strings: typedStrings,
          loop: true,
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 2000
        });
      }
    }
  })();
  