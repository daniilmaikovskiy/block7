import '../scss/style.scss';
import { addSwiper, generateSwiperHTML } from './swiper-helper.js';
import { SERVICES_AND_FACILITIES_SETTINGS } from './global-settings.js';
import { addShowHideButtonListener } from './show-hide-button-helper.js';

generateSwiperHTML(SERVICES_AND_FACILITIES_SETTINGS.swiperSettings);
addSwiper(SERVICES_AND_FACILITIES_SETTINGS.swiperSettings);

addShowHideButtonListener(SERVICES_AND_FACILITIES_SETTINGS.showHideButtonSettings);
