let sidebar = document.querySelector('.sidebar');
let menu_icon_img = document.getElementById('menu_icon_img');

let isOpen = false;

function openSidebar() {
  isOpen = !isOpen;
  checkMenuIcon();

  if (isOpen) {
    sidebar.classList.add('open');
  } else {
    sidebar.classList.remove('open');
  }
}

function checkMenuIcon() {
  if (isOpen) {
    menu_icon_img.src = './icons8-close-50.png';
  } else {
    menu_icon_img.src = './icons8-menu-50.png';
  }
}
