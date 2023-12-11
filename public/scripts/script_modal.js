const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeModalSpan = document.querySelector('.close');

// Открываем модальное окно при клике на кнопку
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Закрываем модальное окно при клике на кнопку закрытия
closeModalSpan.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрываем модальное окно при клике за его пределами
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
