// Mobile menu: opens and closes the navigation on small screens.
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  // Tell the CSS that JavaScript is running, so the menu can be collapsed on phones.
  root.classList.add('js');

  function setOpen(open) {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Close' : 'Menu';
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('open'));
  });

  // Close the menu after choosing a link.
  menu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') setOpen(false);
  });
})();
