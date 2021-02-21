const orderButton = document.querySelector('.page-header__order-button');
const orderPopup = document.querySelector('.popup-wrapper');
const popupCloseButton = orderPopup.querySelector('.popup__close-snap');

orderButton.addEventListener('click', () => {
  orderPopup.classList.add('popup-wrapper--show');
  document.body.style.overflow = 'hidden';
});

popupCloseButton.addEventListener('click', () => {
  orderPopup.classList.remove('popup-wrapper--show');
  document.body.style.overflow = '';
});
