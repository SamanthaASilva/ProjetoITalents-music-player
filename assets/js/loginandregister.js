const openModalLogin = () => {
  const modalLogin = document.querySelector('.form-login')
  modalLogin.style.display = 'flex';
}

const closeModal = () => {
  const modalLogin = document.querySelector('.form-login');
  const modalRegister = document.querySelector('.form-register');
  modalRegister.style.display = 'none';
  modalLogin.style.display = 'none';
}

const openModalRegister = () => {
  const modalRegister = document.querySelector('.form-register')
  modalRegister.style.display = 'flex';
}

const login = document.querySelector('#login')
login.addEventListener('click', openModalLogin)

const register = document.querySelector('#register')
register.addEventListener('click', openModalRegister)

const closeModalLogin = document.querySelector('#icon-login')
closeModalLogin.addEventListener('click', closeModal)

const closeModalRegister = document.querySelector('#icon-register')
closeModalRegister.addEventListener('click', closeModal)

var formLogin = document.querySelector('.form-login');
var getEmail = document.querySelector('#emailClient');

formLogin.addEventListener('submit', function (event) {
  event.preventDefault()
  var inputEmail = getEmail.value;
  var setEmail = localStorage.setItem('clientEmail', inputEmail);
});

var form = document.querySelector('.form-register');
var getName = document.querySelector('#client');

form.addEventListener('submit', function (event) {
  event.preventDefault()
  var input = getName.value;
  var setUser = localStorage.setItem('name', input);
});

function showName() {
  var userLogado = localStorage.getItem('name');
  document.querySelector('#welcome').innerHTML = `Olá, ${userLogado} <i class="bi bi-person-fill"></i>`;
  var emailUser = localStorage.getItem('clientEmail');
  if (userLogado == null || userLogado == '' && emailUser == null || emailUser == '') {
    document.querySelector('#welcome').innerHTML = `Olá, bem-vindo! <i class="bi bi-person-fill"></i>`;
  }
  if (userLogado == null) {
    document.querySelector('#welcome').innerHTML = `Olá, ${emailUser.substring(0, emailUser.indexOf('@'))} <i class="bi bi-person-fill"></i>`;
  }
  else {
    document.querySelector('#welcome').innerHTML = `Olá, ${userLogado} <i class="bi bi-person-fill"></i>`;
  }
}


