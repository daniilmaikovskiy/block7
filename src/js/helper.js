export const addElement = (parent, classes, tagStr = 'div') => {
  let element = document.createElement(tagStr);

  if (typeof classes === 'string') {
    element.classList.add(classes);
  }
  else {
    for (let i = 0; i < classes.length; i++) {
      element.classList.add(classes[i]);
    }
  }

  parent.appendChild(element);

  return element;
}
