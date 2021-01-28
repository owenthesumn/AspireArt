import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar({darkSect, selectedNav, handleSelectNav}) {
    return (
        <header className={darkSect ? 'h-20 w-full flex justify-between items-center px-10 shadow fixed transition-colors delay-400 ease-in-out bg-black bg-opacity-20 z-50' : 'h-20 w-full flex justify-between items-center px-10 shadow fixed transition-colors delay-400 ease-in-out bg-navbar z-50'}>
            <span className='text-3xl text-logo font-medium cursor-pointer'>aspire.</span>
            <nav className='w-104 flex justify-between text-lg text-logo font-semibold'>
            <Link spy={true} smooth={true} duration={500} to='/'>
                <span className={selectedNav.home ? "h-10 px-5 rounded-full flex justify-center items-center bg-navbuttons cursor-pointer transition-colors" : "h-10 px-5 rounded-full flex justify-center items-center cursor-pointer"} onClick={() => {handleSelectNav('home')}}>
                    Home
                </span>
            </Link>
            <Link spy={true} smooth={true} duration={500} to='/about'>
                <span className={selectedNav.about ? "h-10 px-5 rounded-full flex justify-center items-center bg-navbuttons cursor-pointer transition-colors" : "h-10 px-5 rounded-full flex justify-center items-center cursor-pointer"} onClick={() => {handleSelectNav('about')}}>
                        About
                </span>
            </Link>
            <Link spy={true} smooth={true} duration={500} to='/products'>
                <span className={selectedNav.projects ? "h-10 px-5 rounded-full flex justify-center items-center bg-navbuttons cursor-pointer transition-colors" : "h-10 px-5 rounded-full flex justify-center items-center cursor-pointer"} onClick={() => {handleSelectNav('projects')}}>
                        Products
                </span>
            </Link>
            <Link spy={true} smooth={true} duration={500} to='/contact'>
                <span className={selectedNav.contact ? "h-10 px-5 rounded-full flex justify-center items-center bg-navbuttons cursor-pointer transition-colors" : "h-10 px-5 rounded-full flex justify-center items-center cursor-pointer"} onClick={() => {handleSelectNav('contact')}}>
                        Contact us
                </span>
            </Link>
            </nav>
        </header>
    )
}

export default NavBar;
