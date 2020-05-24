import { addElement } from './helper.js';
import { showHideOverflow } from './show-hide-button-helper.js';

const IMG_PATH = '/img/';
const DEFAULT_SHOW_HIDE_BUTTON = {
  showText: 'Показать всё',
  hideText: 'Скрыть',
  buttonClass: 'show-hide-button',
};

const SECTION_1_NAME = 'services-and-facilities';
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
    containerSelector: `#${SECTION_1_NAME}__swiper`,
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
    hideText: DEFAULT_SHOW_HIDE_BUTTON.hideText,
    buttonClass: DEFAULT_SHOW_HIDE_BUTTON.buttonClass,
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

const SECTION_2_NAME = 'repair-of-various-brands';
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
        el: `#${SECTION_2_NAME}__swiper-pagination`,
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
    elementClass: 'brand-button',
    containerSelector: `#${SECTION_2_NAME}__swiper`,
    addElements: (function (swiperSlides) {
      const BUTTON_ARROW_PATH = IMG_PATH + 'button__arrow.svg';

      for (let i = 0; i < this.elementsData.length; i++) {

        let element = addElement(swiperSlides[i],
          [this.elementClass, `swiper-slide__${this.elementClass}`], 'button');

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
    id: `#${SECTION_2_NAME}__show-more`,
    showText: DEFAULT_SHOW_HIDE_BUTTON.showText,
    hideText: DEFAULT_SHOW_HIDE_BUTTON.hideText,
    buttonClass: DEFAULT_SHOW_HIDE_BUTTON.buttonClass,
    target: `.${SECTION_2_NAME} .show-hide-swiper-menu__menu`,
    showHideMethod: showHideOverflow,
  },
};

const SECTION_3_NAME = 'various-types-of-equipment';
export const VARIOUS_TYPES_OF_EQUIPMENT = {
  swiperSettings: {
    objectSettings: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesOffsetBefore: 16,

      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      pagination: {
        el: `#${SECTION_3_NAME}__swiper-pagination`,
        clickable: true,
    },
    },
    elementsData: [
      'Ремонт ноутбуков',
      'Ремонт планшетов',
      'Ремонт ПК',
      'Ремонт мониторов',
    ],
    elementClass: 'equipment-button',
    containerSelector: `#${SECTION_3_NAME}__swiper`,
    addElements: (function (swiperSlides) {
      const BUTTON_ARROW_PATH = IMG_PATH + 'button__arrow.svg';

      for (let i = 0; i < this.elementsData.length; i++) {

        let element = addElement(swiperSlides[i],
          [this.elementClass, `swiper-slide__${this.elementClass}`], 'button');

        let elementText = addElement(element, `${this.elementClass}__text`, 'span');
        elementText.textContent = this.elementsData[i];

        let elementArrow = addElement(element, `${this.elementClass}__arrow`, 'img');
        elementArrow.src = BUTTON_ARROW_PATH;
        elementArrow.alt = '';
      }
    }),
  },
  showHideButtonSettings: {
    id: `#${SECTION_3_NAME}__show-more`,
    showText: DEFAULT_SHOW_HIDE_BUTTON.showText,
    hideText: DEFAULT_SHOW_HIDE_BUTTON.hideText,
    buttonClass: DEFAULT_SHOW_HIDE_BUTTON.buttonClass,
    target: `.${SECTION_3_NAME} .show-hide-swiper-menu__menu`,
    showHideMethod: showHideOverflow,
  },
};
// don't work
const SECTION_4_NAME = 'service-prices';
export const SERVICE_PRICES = {
  swiperSettings: {
    objectSettings: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesOffsetBefore: 8,

      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      pagination: {
        el: `#${SECTION_4_NAME}__swiper-pagination`,
        clickable: true,
      },
    },
    elementsData: [
      {
        service: 'Диагностика',
        price: 'Бесплатно',
        term: '30 мин',
      },
      {
        service: 'Замена дисплея',
        price: '1000 ₽',
        term: '30-120 мин',
      },
      {
        service: 'Замена полиграфического динамика',
        price: '1000 ₽',
        term: '30-120 мин',
      },
      {
        service: 'Тестирование с выдачей технического заключения',
        price: '1000 ₽',
        term: '30-120 мин',
      },
      {
        service: 'Замена программного обеспечения',
        price: '1000 ₽',
        term: '30-120 мин',
      },
    ],
    elementTitles: ['Ремонтные услуги', 'Цена', 'Срок'],
    elementClass: 'service-block',
    containerSelector: `#${SECTION_4_NAME}__swiper`,
    addElements: (function (swiperSlides) {
      const BUTTON_ARROW_IMG_PATH = IMG_PATH + 'button-arrow__img.svg';
      const BUTTON_ARROW_CLASS = 'button-arrow';
      const BUTTON_ARROW_TEXT = 'Заказать';

      let swiperWrapper = document.querySelector(
        `${this.containerSelector} .swiper-wrapper`);
      swiperWrapper.classList.add('swiper-wrapper--table@small-screen');

      for (let i = 0; i < this.elementsData.length; i++) {

        let element = addElement(swiperSlides[i], this.elementClass);

        let currentData = this.elementsData[i];
        let objKeys = Object.keys(currentData);

        for (let j = 0; j < this.elementTitles.length; j++) {
          let textBlock = addElement(element, `${this.elementClass}__text-block`);

          let title = addElement(textBlock, `${this.elementClass}__title`, 'h2');
          title.textContent = this.elementTitles[j];

          let text = addElement(textBlock, `${this.elementClass}__text`, 'p');
          text.textContent = currentData[objKeys[j]];
        }

        let buttonArrow = addElement(element, [BUTTON_ARROW_CLASS,
          `${this.elementClass}__${BUTTON_ARROW_CLASS}`], 'button');

        let buttonArrowText = addElement(buttonArrow,
          `${BUTTON_ARROW_CLASS}__text`, 'span');
        buttonArrowText.textContent = BUTTON_ARROW_TEXT;

        let buttonArrowImg = addElement(buttonArrow,
          `${BUTTON_ARROW_CLASS}__img`, 'img');
          buttonArrowImg.src = BUTTON_ARROW_IMG_PATH;
          buttonArrowImg.alt = '';
      }
    }),
  },
};
