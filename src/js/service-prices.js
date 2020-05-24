import { addSwiper, generateSwiperHTML } from './swiper-helper.js';
import { SERVICE_PRICES } from './global-settings.js';

generateSwiperHTML(SERVICE_PRICES.swiperSettings);
addSwiper(SERVICE_PRICES.swiperSettings);

