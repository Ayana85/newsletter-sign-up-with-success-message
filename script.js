const signup = document.getElementById('signup')
const successMessage = document.getElementById('successMessage');
const form = document.getElementById('form-control');
const input = document.getElementById('email');
const subscribeBtn = document.getElementById('subscribeBtn');
const dismissBtn = document.getElementById('dismissBtn');
const error = document.getElementById('error');



function validatateEmail(e) {
    e.preventDefault();

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!validRegex.test(input.value)) {
        input.classList.add('error');
        error.textContent = 'Valid email required';

        input.style.outline = '0.1rem solid #ff6257';
        input.style.backgroundColor = '#ffcece';
        input.style.border = 'none';
        input.placeholder.style.color = 'red';
        return false;
    } else {
        input.classList.remove('error');
        error.textContent = '';
        
        // input.style.outline = '0.1rem solid green';
        
        signup.style.display = 'none';
        successMessage.style.display = 'flex';
        //successMessage.classList('open-message');


    }
}

function dismissMsg(e) {
    e.preventDefault();
    successMessage.style.display = 'none';
    signup.style.display = 'flex';
    
}

subscribeBtn.addEventListener('click', validatateEmail);
dismissBtn.addEventListener('click', dismissMsg);