
const saveAccount = () => {
    const newName = document.getElementById('edit-name').value;
    const newEmail = document.getElementById('edit-email').value;
    const newPassword = document.getElementById('edit-password').value;
   if(newName != '' || newEmail != "" || newPassword != ""){
    alert('Dados cadastrais alterados com sucesso!')
   }
   if(newName == '' && newEmail == "" && newPassword == ""){
    alert('Preencha o campo para ser alterado');
   }
}


const account = document.getElementsByClassName('button-save')[0];
account.addEventListener('click', saveAccount)