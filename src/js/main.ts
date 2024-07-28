
// Swipers

// @ts-ignore
function destroySlidersOnResize(selector, width, obj, moreThan) {
    const init = {
      ...obj,
    };
  
    const win = window;
    const sliderSelector = document.querySelector(selector);
    // @ts-ignore
    let swiper = new Swiper(selector, init);
  
    const toggleInit = () => {
      const neededWidth = moreThan
        ? win.innerWidth >= width
        : win.innerWidth <= width;
      if (neededWidth) {
        if (!sliderSelector?.classList.contains("swiper-initialized")) {
          // @ts-ignore
          swiper = new Swiper(selector, init);
        }
      } else if (sliderSelector.classList.contains("swiper-initialized")) {
        swiper.destroy();
      }
    };
  
    ["load", "resize"].forEach((evt) =>
      win.addEventListener(evt, toggleInit, false)
    );
}

// @ts-ignore
destroySlidersOnResize(".cardSlider", 599, {
    spaceBetween: 24,
    slidesPerView: 1,
    
    pagination: {
      el: '.card-pag',
      clickable: true,
    },
});

// @ts-ignore
destroySlidersOnResize(".reviewsSlider", 999999, {
  spaceBetween: 54,
  slidesPerView: 3,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    608: {
      spaceBetween: 24,
      slidesPerView: 1.5,
    },
    768: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
    1100: {
      spaceBetween: 54,
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.reviews-next',
    prevEl: '.reviews-prev',
  },
  
  pagination: {
    el: '.reviews-pag',
    clickable: true,
  },
});