import { useState } from 'react';
import './FormValidator.css';


const FormValidator = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [message, setMessage] = useState('');
    //const [error, setError] = useState(null);


//    const validateEmail = (emailEntered) => {
//        let isValidEmail = /\S+@\S+\.\S+/.test(emailEntered);
//
//        if (!isValidEmail) {
//            setError('Email is invalid');
//        } else {
//            setEmail(emailEntered);
//            setError(null);
//        };
//    };
//
//    const validatePassword = (passwordEntered) => {
//        if (passwordEntered.length < 8) {
//            setError('Password has to few characters.');
//        } else {
//            setPassword(passwordEntered);
//            setError(null);
//        };
//    };
//
//    const confirmPassword = (passwordEntered) => {
//        if (passwordEntered !== password) {
//            setError('Passwords do not match.');
//        } else {
//            setPasswordConfirm(passwordEntered);
//            setError(null);
//        };
//    };

    const findErrors = () => {
        const errors = [];

        if (!email || !password || !passwordConfirm) errors.push('All fields must be filled in.');
        if ([...email].filter(i => i === '@').length !== 1) {
            errors.push('An email must have exactly one @ sign');
        }
        if (password.length < 8) errors.push('Password must be 8 characters or longer.');
        if (password !== passwordConfirm) errors.push('Passwords must match.');

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = findErrors();
        setMessage(errors.length ? errors.join(', ') : 'User created!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up!</h2>

            <label htmlFor='email'>Email</label>
            <input
                type='text' name='email'
                onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor='password'>Password</label>
            <input
                type='password' name='password'
                onChange={e => setPassword(e.target.value)}
            />

            <label htmlFor='password-confirm'>Confirm Password </label>
            <input
                type='password' name='password-confirm'
                onChange={e => setPasswordConfirm(e.target.value)}
            />

            {message}
            {/*{error}*/}
            <input type='submit' value='Submit' />
        </form>
    );
};


export default FormValidator;
