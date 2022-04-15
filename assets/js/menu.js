const buttonMenuMobile = document.querySelector(".menu__botao--busca--mobile");

const menuMobile = document.querySelector(".menu__busca--mobile");


buttonMenuMobile.addEventListener('click', displayMenuMobile)

function displayMenuMobile(event) {
  const menuDisplay = menuMobile.style.display;

  if(menuDisplay == 'flex') {

    menuMobile.style.display = 'none';
    event.target.src = '/assets/img/icone-busca.svg';
  } else if(menuDisplay == 'none' || menuDisplay == '') {

    menuMobile.style.display = 'flex';
    event.target.src = '/assets/img/button-close.svg';
  }
}

