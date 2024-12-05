document.addEventListener('DOMContentLoaded', function () {
    const signUpLink = document.querySelector('.login-form-subscribe a');
    const loginLink = document.querySelector('.sign-up-form-login a');

    const showFormSignUp = () => {
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.sign-up-form').style.display = 'flex';
    }

    const showFormLogin = () => {
        document.querySelector('.login-form').style.display = 'flex';
        document.querySelector('.sign-up-form').style.display = 'none';
    }


    signUpLink.addEventListener('click', function (event) {
        event.preventDefault();
        showFormSignUp();
    });

    loginLinkLink.addEventListener('click', function (event) {
        event.preventDefault();
        showFormLogin();
    });




})