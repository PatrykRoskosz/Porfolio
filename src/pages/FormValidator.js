import React, { useState } from 'react';
import Components from '../components';
import '../css/FormValidator.css';




const FormValidator = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRepeatPassword, setUserRepeatPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    // const [countError, setCountError] = useState(0);


    const showError = (input, msg) => {
        const formBox = input.parentElement;
        const errorMesage = formBox.querySelector('.error-text');

        formBox.classList.add('error');
        errorMesage.textContent = msg;
        // console.log(formBox);
    };

    const clearError = input => {
        const formBox = input.parentElement;
        formBox.classList.remove('error');
    };

    const checkForm = input => {
        input.forEach(el => {
            if(el.value === '') {
                showError(el, el.placeholder)
            } else {
                clearError(el);
            }
        })
    };

    const checkLenght = (input,min) => {
        if(input.value.length < min) {
            showError(input, `${input.id} min. ${min} characters`)
        }
    };

    const checkPasswords = (pass1, pass2) => {
        if (pass1.value !== pass2.value) {
            showError(pass2, 'password does not match')
        }
    };

    const checkEmail = email => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(re.test(email.value)){
                clearError(email)
            } else {
                showError(email, 'incorrect email address' )
            }
    };

    const checkErrors = ()=> {
        const allInputs = document.querySelectorAll('.form-box');
        let countError = 0;

       
        allInputs.forEach(el => {
            if(el.classList.contains('error')){
               countError++;
            } 
        });  
        if(countError === 0) {
            const popup = document.querySelector('.popup');
            popup.classList.add('show-popup');
        };
       
    };
 
    const handleSandFormInput = (e) => {
        e.preventDefault();
        const userName = document.querySelector('#username');
        const pass = document.querySelector('#password');
        const pass2 = document.querySelector('#password2');
        const email = document.querySelector('#email');
        
        checkForm([userName, pass, pass2, email]);
        checkLenght(userName, 4);
        checkLenght(pass, 8);
        checkPasswords(pass, pass2);
        checkEmail(email);
        checkErrors();
    };
        
    

    const handleClearInputText = (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('.form-box input');
        inputs.forEach(el =>{
           el.value = '';
           clearError(el)
        } );
    };
    
    const handleDownloadText = e => {
        const name = e.target.id;

        switch(name) {
            case'username':
             setUserName(preV => preV = e.target.value);
                break;
            case 'password':
                setUserPassword(preV => preV = e.target.value)
                break;
            case 'password2': 
            setUserRepeatPassword(preV => preV = e.target.value)
                break;
            case 'email':
                setUserEmail(preV => preV = e.target.value)
                break;
            default :
                console.log('cos nie tak');
        }
    };


    const handleChangeShowPasswprd = (e) => {
        e.preventDefault();
       const char = e.target.name
        if(char === 'p1') {
            setShowPassword(preV => !preV)
        } else {
            setShowPassword2(preV => !preV)
        }
    };

    return (
        <section className='formValidationSection'>
            <Components.BackButton href='/projects' />
            <form >
                <h1>Register</h1>
                <div className='form-box'>
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id='username' placeholder='Give your name' onChange={handleDownloadText}/>
                    <p className='error-text'>error</p>
                </div>
                <div className='form-box'>
                    <label htmlFor="password">Password:</label>
                    <input type={showPassword ? "text" : "password"} id='password' placeholder='Give password' onChange={handleDownloadText} /> 
                    <button className='showBtn' name='p1' onClick={handleChangeShowPasswprd}>{showPassword? '/'  : 'o' } </button>
                    <p className='error-text'>error</p>
                </div>
                <div className='form-box'>
                    <label htmlFor="password2">Repeat password:</label>
                    <input type={showPassword2 ? "text" : "password"} id='password2' placeholder='Repeat passwor' onChange={handleDownloadText}/> 
                    <button  
                    className='showBtn' 
                    name='p2' onClick={handleChangeShowPasswprd} 
                    >{showPassword2? '/' : 'o' }</button>
                    <p className='error-text'>error</p>
                </div>
                <div className='form-box'>
                    <label htmlFor="email">E-mail adress:</label>
                    <input type="email" id='email' placeholder='Give e-mail' onChange={handleDownloadText}/>
                    <p className='error-text'>error</p>
                </div>

                <div className='control-buttons'>
                    <button className='clear' onClick={handleClearInputText}>Clear</button>
                    <button className='send' onClick={handleSandFormInput} >Send</button>
                </div>

                <div className='popup '>
                    <p>The form has been successfully sent!</p>
                    <button className='close'>Close</button>
                </div>


            </form>
        </section>
       
    )
}

export default FormValidator;