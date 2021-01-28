import React from 'react';
import Section from '../components/Section';
import '../App.css';

const Contact = React.forwardRef((props, ref) => {
    return (
        <section id='/contact' ref={ref} className='h-screen w-screen bg-navbar flex justify-center items-center'>
            Contact us
        </section>
    )
});

export default Contact;
