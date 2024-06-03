import React, { FormEvent, useState } from 'react';

export function ContactMe() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [nameError, setNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [messageError, setMessageError] = useState<string | null>(null);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (name === "") {
            setNameError("Name is required");
        } else {
            setNameError(null);
        }

        if (email === "") {
            setEmailError("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Email address is invalid");
        } else {
            setEmailError(null);
        }

        if (message === "") {
            setMessageError("Message is required");
        } else {
            setMessageError(null);
        }

        if (name !== "" && /\S+@\S+\.\S+/.test(email) && message !== "") {
            // Here you would typically send the form data to a server or an email
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        }
    }

    return (
        <div className='contact-form-container'>

            <div className="contact-form">
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                        {nameError && <div className="error">{nameError}</div>}
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                        {emailError && <div className="error">{emailError}</div>}
                    </label>
                    <label>
                        Message:
                        <textarea value={message} onChange={e => setMessage(e.target.value)} required />
                        {messageError && <div className="error">{messageError}</div>}
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>

    );
}
