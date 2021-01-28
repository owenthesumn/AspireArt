import React from 'react';
import Section from '../components/Section';
import '../App.css';

const Home = React.forwardRef((props, ref) => {
    return (
        <section id='/' ref={ref} className='h-screen w-screen bg-main flex justify-center items-center'>
            Home
        </section>
    )
});

export default Home;
