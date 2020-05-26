import { addSwiper, generateSwiperHTML } from './swiper-helper.js';
import { SERVICE_PRICES } from './global-settings.js';
import { addElement } from './helper.js';

let container = document.querySelector(
  SERVICE_PRICES.swiperSettings.containerSelector);
let titleContainer = addElement(container, `title-container`);
let wrapper = addElement(titleContainer, `title-container__wrapper`);

for (let i = 0; i < SERVICE_PRICES.swiperSettings.elementTitles.length; i++) {

  let title = addElement(wrapper, `title-container__title`, 'span');
  title.textContent = SERVICE_PRICES.swiperSettings.elementTitles[i];
}

generateSwiperHTML(SERVICE_PRICES.swiperSettings);
addSwiper(SERVICE_PRICES.swiperSettings);

