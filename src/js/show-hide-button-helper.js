export const addShowHideButtonListener = (settings) => {

  let button = document.querySelector(settings.id);
  let buttonSpan = button.querySelector(`.${settings.buttonClass}__text`);
  let isActive = false;

  button.addEventListener('click', function () {
    if (isActive) {
      buttonSpan.textContent = settings.showText;
      button.classList.remove(`${settings.buttonClass}--active`);
    }
    else {
      buttonSpan.textContent = settings.hideText;
      button.classList.add(`${settings.buttonClass}--active`);
    }

    settings.showHideMethod(!isActive);

    isActive = !isActive;
  });
}
