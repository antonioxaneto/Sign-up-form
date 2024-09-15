const email = document.getElementById('email');
const form = document.getElementById('form');
const errorMessage = document.querySelector('.error-message');
const modal = document.getElementById('success-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalButton = document.getElementById('close-modal');

const modalMessage = modal.querySelector('p');

form.addEventListener("submit", (event) => {
    event.preventDefault();

   checkInput()
})

email.addEventListener('input', () => {
    if (email.value.trim() !== '') {
      removeError(email);
    }
  });

closeModalButton.addEventListener('click', () => {
    closeModal();
  });

function checkInput(){
    const emailValue = email.value.trim()

    if(emailValue === ''){
        errorInput(email, 'Valid email required')
    }else{
        enviarEmail();
        showModal(email.value);
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
  
function showModal() {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}

function showModal(emailValue) {
    modalMessage.innerHTML = `A confirmation email has been sent to <strong>${emailValue}</strong>. Please open it and click the button inside to confirm your subscription.`;
    
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
}

