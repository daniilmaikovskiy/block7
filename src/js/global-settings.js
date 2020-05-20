import { addElement } from './helper.js';

const IMG_PATH = '/img/';

export const SERVICES_AND_FACILITIES_SWIPER_SETTINGS = {
  objectSettings: {
    slidesPerView: 'auto',
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
  activeIndex: 0,
  addElements: (function (swiperSlides) {
    let elements = [];
    let activeIndex = this.activeIndex;
    let elementClass = this.elementClass;

    for (let i = 0; i < this.elementsData.length; i++) {
      let classes = [elementClass];

      if (i === activeIndex) {
        classes.push(elementClass + '--active');
      }

      let element = addElement(swiperSlides[i], classes, 'button');
      let elementText = addElement(element, elementClass + '__text', 'span');

      elementText.textContent = this.elementsData[i];

      (function (element, i) {
        element.addEventListener('click', function () {
          if (i !== activeIndex) {
            elements[activeIndex].classList.remove(elementClass + '--active');

            activeIndex = i;
            elements[i].classList.add(elementClass + '--active');
          }
        });
      })(element, i);

      elements.push(element);
    }
  }),
};
