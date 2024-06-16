const bodyElement = document.querySelector('body');
const htmlElement = document.querySelector('html');
if (bodyElement.classList.length == 0 && htmlElement.classList.contains('sf-js-enabled')) {
  bodyElement.style.backgroundColor = '#303030';
}