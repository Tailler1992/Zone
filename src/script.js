document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle("active");
    document.querySelector('.header__burger').classList.toggle("active");
    document.querySelector('body').classList.toggle("lock");
  })