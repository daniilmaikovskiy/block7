import { addElement } from './helper.js';
import Swiper from 'swiper';

export const addSwiper = (settings) => {
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper;

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();

    function breakpointChecker() {
        if ( breakpoint.matches === true ) {

            if ( mySwiper !== undefined ) {

                mySwiper.destroy( true, true );
                return;
            }
        } else if ( breakpoint.matches === false ) {

            return enableSwiper();
        }
    };

    function enableSwiper() {
        mySwiper = new Swiper (settings.containerSelector, settings.objectSettings);
    };
}

export const generateSwiperHTML = (settings) => {

  let swiperContainer = document.querySelector(settings.containerSelector);
  let swiperWrapper = addElement(swiperContainer, 'swiper-wrapper');
  let swiperSlides = [];

  for (let i = 0; i < settings.elementsData.length; i++) {
    let swiperSlide = addElement(swiperWrapper, 'swiper-slide');
    swiperSlides.push(swiperSlide);
  }

  settings.addElements(swiperSlides);
}
