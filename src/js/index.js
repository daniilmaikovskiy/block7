import '../scss/style.scss';
import { addSwiper, generateSwiperHTML } from './swiper-helper.js';
import { SERVICES_AND_FACILITIES_SWIPER_SETTINGS,
  SERVICES_AND_FACILITIES_SHOW_BUTTON_TEXT,
  SERVICES_AND_FACILITIES_HIDE_BUTTON_TEXT
} from './global-settings.js';

generateSwiperHTML(SERVICES_AND_FACILITIES_SWIPER_SETTINGS);
addSwiper(SERVICES_AND_FACILITIES_SWIPER_SETTINGS);

const addShowHideButtonListener = () => {
  const BUTTON_ID = '#read-more';
  const BUTTON_CLASS = 'show-hide-button';
  const SHOW_TEXT = SERVICES_AND_FACILITIES_SHOW_BUTTON_TEXT;
  const HIDE_TEXT = SERVICES_AND_FACILITIES_HIDE_BUTTON_TEXT;

  let button = document.querySelector(BUTTON_ID);
  let buttonSpan = button.querySelector(`.${BUTTON_CLASS}__text`);
  let isActive = false;

  button.addEventListener('click', function () {
    if (isActive) {
      buttonSpan.textContent = SHOW_TEXT;
      button.classList.remove(`${BUTTON_CLASS}--active`);
    }
    else {
      buttonSpan.textContent = HIDE_TEXT;
      button.classList.add(`${BUTTON_CLASS}--active`);
    }

    showHideParagraph2(!isActive);

    isActive = !isActive;
  });
}

const showHideParagraph2 = (isHidden) => {
  const classes = ['info__paragraph-2', 'info__paragraph-2-continuation'];

  for (let i = 0; i < classes.length; i++) {
    let element = document.querySelector(`.${classes[i]}`);

    if (isHidden) {
      element.classList.add(`${classes[i]}--visible`);
    }
    else {
      element.classList.remove(`${classes[i]}--visible`);
    }
  }
}

addShowHideButtonListener();
