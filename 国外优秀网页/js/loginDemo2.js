const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});    
    
