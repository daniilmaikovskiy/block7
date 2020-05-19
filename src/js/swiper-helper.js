import { addElement } from './helper.js';
import Swiper from 'swiper';

export const addSwiper = (swiperContainerSelector, swiperSettings) => {
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
        mySwiper = new Swiper (swiperContainerSelector, swiperSettings);
    };
}

export const generateSwiperHTML = (settings) => {

  let swiperContainer = document.querySelector(settings.containerSelector);
  let swiperWrapper = addElement(swiperContainer, 'swiper-wrapper');

  for (let i = 0; i < settings.elementsData.length; i++) {
    let swiperSlide = addElement(swiperWrapper, 'swiper-slide');
    settings.addElementMethod(swiperSlide, settings.elementsData[i]);
  }
}
