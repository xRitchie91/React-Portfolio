import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section id="contact"><br></br><br></br>
            <center>
            <h1 data-testid="h1tag">Let's Get In Touch!</h1>
            </center>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <center>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} /><br></br>
                <label htmlFor="email">Email:  </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} /><br></br>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} /><br></br>
                    </center>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <center><button data-testid="button" type="submit">Send</button></center>
            </form><br></br>
        </section>
    );
}

export default ContactForm;