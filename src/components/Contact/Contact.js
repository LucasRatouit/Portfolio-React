import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hxdgset', 'template_gegujx7', form.current, 'ft3fiTNaFr2_e88hj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <section>
            <form ref={form} onSubmit={sendEmail} class="contactEmail">
                <label>Nom</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" class="inputEmail" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Envoyer" class="send" />
            </form>
        </section>
    );
}

export default Contact;