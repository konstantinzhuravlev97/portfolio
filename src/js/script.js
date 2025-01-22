const hamburger = document.querySelector('.hamburger'),
      closeElem = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__percent-number'),
      lines = document.querySelectorAll('.skills__percent-scale_complete');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});