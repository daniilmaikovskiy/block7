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
let chatCloseButton    = document.querySelector('#chat__close-button');

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

let call = document.querySelector('#call');

let callButtonArrow = call.querySelector('.button-arrow');

let sideMenuCallButton = document.querySelector('#side-menu__call');
let mainCallButton     = document.querySelector('#main__call');
let callCloseButton    = document.querySelector('#call__close-button');

const callButtonOnClick = (call, fogOfWar, buttonArrow) => {
  call.classList.add('modal--active');
  fogOfWar.classList.add('fog-of-war--active');
  buttonArrow.classList.remove('button-arrow--hidden');
}

const callCloseButtonOnClick = (call, fogOfWar, buttonArrow) => {
  call.classList.remove('modal--active');
  fogOfWar.classList.remove('fog-of-war--active');
  buttonArrow.classList.add('button-arrow--hidden');
}

sideMenuCallButton.addEventListener('click', function () {
  callButtonOnClick(call, fogOfWar, callButtonArrow);
});

mainCallButton.addEventListener('click', function () {
  callButtonOnClick(call, fogOfWar, callButtonArrow);
});

callCloseButton.addEventListener('click', function () {
  callCloseButtonOnClick(call, fogOfWar, callButtonArrow);
});

fogOfWar.addEventListener('click', function () {
  chatCloseButtonOnClick(chat, fogOfWar, chatTextarea, chatButtonArrow);
  callCloseButtonOnClick(call, fogOfWar, callButtonArrow);
});
