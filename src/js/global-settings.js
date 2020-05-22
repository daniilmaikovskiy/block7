import { addElement } from './helper.js';

const IMG_PATH = '/img/';

export const SERVICES_AND_FACILITIES_SETTINGS = {
  swiperSettings: {
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
  },
  showHideButtonSettings: {
    id: '#read-more',
    showText: 'Читать далее',
    hideText: 'Скрыть',
    buttonClass: 'show-hide-button',
    hiddenElementsClasses: ['info__paragraph-2', 'info__paragraph-2-continuation'],
    showHideMethod: (function (isHidden) {
      const MODIFIER = '--visible';

      for (let i = 0; i < this.hiddenElementsClasses.length; i++) {
        let element = document.querySelector(`.${this.hiddenElementsClasses[i]}`);

        if (isHidden) {
          element.classList.add(`${this.hiddenElementsClasses[i]}${MODIFIER}`);
        }
        else {
          element.classList.remove(`${this.hiddenElementsClasses[i]}${MODIFIER}`);
        }
      }
    }),
  },
};

export const REPAIR_OF_VARIOUS_BRANDS = {
  swiperSettings: {
    objectSettings: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesOffsetBefore: 16,

      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      pagination: {
        el: '#repair-of-various-brands__swiper-pagination',
        clickable: true,
    },
    },
    elementsData: [
      {
        src: 'lenovo.png',
        alt: 'Lenovo',
        sizeModifier: null
      },
      {
        src: 'samsung.png',
        alt: 'Samsung',
        sizeModifier: null
      },
      {
        src: 'apple.png',
        alt: 'Apple',
        sizeModifier: 'small'
      },
      {
        src: 'view-sonic.png',
        alt: 'View Sonic',
        sizeModifier: 'big'
      },
      {
        src: 'bosch.png',
        alt: 'Bosch',
        sizeModifier: 'little-big'
      },
      {
        src: 'hp.png',
        alt: 'hp',
        sizeModifier: 'small'
      },
      {
        src: 'acer.png',
        alt: 'Acer',
        sizeModifier: 'big'
      },
      {
        src: 'sony.png',
        alt: 'Sony',
        sizeModifier: 'big'
      },
      {
        src: 'lenovo.png',
        alt: 'Lenovo',
        sizeModifier: null
      },
      {
        src: 'samsung.png',
        alt: 'Samsung',
        sizeModifier: null
      },
      {
        src: 'apple.png',
        alt: 'Apple',
        sizeModifier: 'small'
      },
    ],
    elementClass: 'button',
    elementModifier: '--brand',
    containerSelector: '#repair-of-various-brands-swiper',
    addElements: (function (swiperSlides) {
      const BUTTON_ARROW_PATH = IMG_PATH + 'button__arrow.svg';

      for (let i = 0; i < this.elementsData.length; i++) {

        let element = addElement(swiperSlides[i],
          [
            this.elementClass, `swiper-slide__${this.elementClass}`,
            this.elementClass + this.elementModifier
          ], 'button');

        let elementBrandImgClasses = [`${this.elementClass}__img`];

        if (this.elementsData[i].sizeModifier !== null) {
          elementBrandImgClasses.push(
            `${this.elementClass}__img--${this.elementsData[i].sizeModifier}`);
        }

        let elementBrandImg = addElement(element, elementBrandImgClasses, 'img');
        elementBrandImg.src = `${IMG_PATH}${this.elementsData[i].src}`;
        elementBrandImg.alt = `${IMG_PATH}${this.elementsData[i].alt}`;

        let elementArrow = addElement(element, `${this.elementClass}__arrow`, 'img');
        elementArrow.src = BUTTON_ARROW_PATH;
        elementArrow.alt = '';
      }
    }),
  },
  showHideButtonSettings: {
    id: '#repair-of-various-brands-show-more',
    showText: 'Показать всё',
    hideText: 'Скрыть',
    buttonClass: 'show-hide-button',
    showHideMethod: (function (isHidden) {
      const TARGET_ELEMENT_CLASS = 'repair-of-various-brands__menu';
      const MODIFIER = '--show-all';
      let target = document.querySelector(`.${TARGET_ELEMENT_CLASS}`);

      if (isHidden) {
        target.classList.add(`${TARGET_ELEMENT_CLASS}${MODIFIER}`);
      }
      else {
        target.classList.remove(`${TARGET_ELEMENT_CLASS}${MODIFIER}`);
      }
    }),
  },
};
