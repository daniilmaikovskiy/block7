import '../scss/style.scss';
import './services-and-facilities.js';
import './repair-of-various-brands.js';
import './various-types-of-equipment.js';
import './service-prices.js';

let fogOfWar           = document.querySelector('.fog-of-war');

let chat               = document.querySelector('#chat');
let chatTextarea       = chat.querySelector('.input-text--textarea');
let chatButtonArrow    = chat.querySelector('.button-arrow');

let sideMenuChatButton = document.querySelector('#side-menu__chat');
let mainChatButton     = document.querySelector('#main__chat');
let chatCloseButton    = chat.querySelector('#chat__close-button');

const chatButtonOnClick = (chat, fogOfWar, textarea, buttonArrow) => {
  chat.classList.add('modal--active');
  fogOfWar.classList.add('fog-of-war--active');
  textarea.classList.remove('input-text--hidden');
  buttonArrow.classList.remove('button-arrow--hidden');
}

const chatCloseButtonOnClick = (chat, fogOfWar, textarea, buttonArrow) => {
  chat.classList.remove('modal--active');
  fogOfWar.classList.remove('fog-of-war--active');
  textarea.classList.add('input-text--hidden');
  buttonArrow.classList.add('button-arrow--hidden');
}

sideMenuChatButton.addEventListener('click', function () {
  chatButtonOnClick(chat, fogOfWar, chatTextarea, chatButtonArrow);
});

mainChatButton.addEventListener('click', function () {
  chatButtonOnClick(chat, fogOfWar, chatTextarea, chatButtonArrow);
});

chatCloseButton.addEventListener('click', function () {
  chatCloseButtonOnClick(chat, fogOfWar, chatTextarea, chatButtonArrow);
});
