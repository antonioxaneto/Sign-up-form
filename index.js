const email = document.getElementById('email');
const form = document.getElementById('form');
const errorMessage = document.querySelector('.error-message');

form.addEventListener("submit", (event) => {
    event.preventDefault();

   checkInput()
})

email.addEventListener('input', () => {
    if (email.value.trim() !== '') {
      removeError(email);
    }
  });

function checkInput(){
    const emailValue = email.value.trim()

    if(emailValue === ''){
        errorInput(email, 'Valid email required')
    }else{
        enviarEmail();
    }
}

function enviarEmail() {
    console.log('Email enviado')
}

function errorInput(input, message) {
    input.classList.add('error');
    errorMessage.style.display = 'block';
    errorMessage.innerText = message;
  }

  function removeError(input) {
    input.classList.remove('error');
    errorMessage.style.display = 'none';
  }

