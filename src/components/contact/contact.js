import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_z078jdg', 'template_22ljfn5', form.current, 'AsY1eRUrOSWwpbDhcls6I')
    .then((result) => {
        console.log(result.text);
        e.target.reset();
      alert('Email sent successfully!');
    }, (error) => {
        console.log(error.text);
        e.target.reset();
      alert('Email Not sent successfully!');
    });
};


  return (
    <div className='detailsForm'>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <h1 className='contactNameTitle'>CONTACT ME!!!</h1>
        <span className='contactDesc'>
          Please fill out the form below to discuss work opportunities
        </span>
        <input type='text' className='name' placeholder='Your Name' name='to_name' />
        <input type='email' className='email' placeholder='Your email' name='your_email' />
        <textarea className='message' rows={5} placeholder='Your Message' name='message' />
        <input type='submit' value='Submit' className='submitBtn' />
      </form>
    </div>
  );
}
