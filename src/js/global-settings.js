import { addElement } from './helper.js';

const IMG_PATH = '/img/';

export const SERVICES_AND_FACILITIES_SWIPER_SETTINGS = {
  mainSettings: {
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,
  },
  elementsData: [
    'Ремонтируемые бренды',
    'Дополнительные услуги',
    'Цены на услуги',
    'Адреса сервисных центров',
    'Специальные цены',
    'Отзывы',
  ],
  elementClass: 'button',
  containerSelector: '#services-and-facilities',
  addElementMethod: (function (swiperSlide, elementData) {
    let element = addElement(swiperSlide, this.elementClass);
    element.textContent = elementData;
  }),
};

Object.freeze(SERVICES_AND_FACILITIES_SWIPER_SETTINGS);
