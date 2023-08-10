const modal = document.querySelector('dialog');
const modalContent = document.querySelector('.modal__content');
const dashboardList = document.querySelector('.dashboard-list ');

dashboardList.addEventListener('click', showModal);

function showModal(e) {
  let elem = e.target.parentElement;
  if (
    !elem.classList.contains('dashboard-item-card__thumb') &&
    !elem.classList.contains('dashboard-item-card__thumb--horizontal')
  ) {
    return;
  }

  modalContent.innerHTML = elem.outerHTML;
  modal.showModal();
}

modal.onclick = e => {
  if (!e.target.closest('.modal__content')) {
    modal.close();
  }
};
