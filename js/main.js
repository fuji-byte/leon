const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
const navLinks = nav.querySelectorAll('a');

function setMenu(open) {
  ham.classList.toggle('active', open);
  nav.classList.toggle('active', open);
  document.body.classList.toggle('nav-open', open);
  ham.setAttribute('aria-expanded', String(open));
  ham.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
}

ham.addEventListener('click', function () {
  setMenu(!nav.classList.contains('active'));
});

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    setMenu(false);
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    setMenu(false);
  }
});
