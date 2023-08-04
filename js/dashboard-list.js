const dashboardList = document.querySelector('.dashboard-list ');

dashboardList.addEventListener('click', myFunction);

function myFunction(e) {
  if (
    !e.target.parentElement.classList.contains('dashboard-item-card__thumb')
  ) {
    return;
  }
  e.target.parentElement.style.transform = 'scale(3.2)';
}

// dashboardList.onclick = function (e) {
//   console.log(e.target.addEventListener);
//   // if (e.target === e.target.parentNode) {
//   //   console.log('a');
//   // } else {
//   //   console.log('b');
//   // }

//   // e.target.parentNode.style.transform = 'scale(3.2)';
//   console.log(
//     e.target.parentElement === '<div class="dashboard-item-card__thumb">',
//   );
// };
