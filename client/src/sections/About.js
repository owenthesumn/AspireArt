import React from 'react';
import Section from '../components/Section';
import '../App.css';

const About = React.forwardRef((props, ref) => {
    return (
        <section id='/about' ref={ref} className='h-screen w-screen bg-navbar flex justify-center items-center'>
            About
        </section>
    )
});

export default About;
