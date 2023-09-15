const openMenu = () => {
    const modalMenu = document.querySelector('.menu')
    if (modalMenu.style.display == 'none' || modalMenu.style.display == '' ) {
        modalMenu.style.display = 'flex'
    }
    else{
    modalMenu.style.display = 'none'
    }
  }

const menu = document.querySelector('.bi-list')
menu.addEventListener('click', openMenu)

