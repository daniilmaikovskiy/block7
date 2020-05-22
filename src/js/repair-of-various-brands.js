import { addSwiper, generateSwiperHTML } from './swiper-helper.js';
import { REPAIR_OF_VARIOUS_BRANDS } from './global-settings.js';
import { addShowHideButtonListener } from './show-hide-button-helper.js';

generateSwiperHTML(REPAIR_OF_VARIOUS_BRANDS.swiperSettings);
addSwiper(REPAIR_OF_VARIOUS_BRANDS.swiperSettings);

addShowHideButtonListener(REPAIR_OF_VARIOUS_BRANDS.showHideButtonSettings);
