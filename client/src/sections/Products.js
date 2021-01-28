import React from 'react';
import Section from '../components/Section';
import '../App.css';

const Products = React.forwardRef((props, ref) => {
    return (
        <section id='/products' ref={ref} className='h-screen w-screen bg-main flex justify-center items-center'>
            Products
        </section>
    )
});

export default Products;
