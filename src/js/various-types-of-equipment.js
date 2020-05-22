import { addSwiper, generateSwiperHTML } from './swiper-helper.js';
import { VARIOUS_TYPES_OF_EQUIPMENT } from './global-settings.js';
import { addShowHideButtonListener } from './show-hide-button-helper.js';

generateSwiperHTML(VARIOUS_TYPES_OF_EQUIPMENT.swiperSettings);
addSwiper(VARIOUS_TYPES_OF_EQUIPMENT.swiperSettings);
addShowHideButtonListener(VARIOUS_TYPES_OF_EQUIPMENT.showHideButtonSettings);
