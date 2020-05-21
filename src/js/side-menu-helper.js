export const addSideMenuShowHideButtonsListener = () => {
  const BUTTON_ID = '#side-menu-button';
  const BUTTON_CLOSE_ID = '#side-menu-button-close';
  const ELEMENT_CLASS = 'my-site__side-menu';
  const MODIFIER = '--active';

  let sideMenuButton = document.querySelector(BUTTON_ID);
  let sideMenuButtonClose = document.querySelector(BUTTON_CLOSE_ID);
  let sideMenu = document.querySelector(`.${ELEMENT_CLASS}`);

  sideMenuButton.addEventListener('click', function () {
    sideMenu.classList.add(`${ELEMENT_CLASS}${MODIFIER}`);
  });

  sideMenuButtonClose.addEventListener('click', function () {
    sideMenu.classList.remove(`${ELEMENT_CLASS}${MODIFIER}`);
  });
}
