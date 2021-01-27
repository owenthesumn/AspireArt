import React, { useState } from 'react';
import { HashRouter as Link } from 'react-router-dom';
import { FiAperture } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";

function NavBar() {
    const [selectedNav, setSelectedNav] = useState({home: true, about: false, projects:false, contact: false})

    const handleSelectNav = (selected) => {
        let selectedButton;
        if (selected === 'home') {
            selectedButton = {home: true, about: false, projects:false, contact: false};
        } else if (selected === 'about') {
            selectedButton = {home: false, about: true, projects:false, contact: false};
        } else if (selected === 'projects') {
            selectedButton = {home: false, about: false, projects:true, contact: false}
        } else {
            selectedButton = {home: false, about: false, projects:false, contact: true}
        }
        setSelectedNav(selectedButton);
    }

    return (
        <header className='h-20 w-screen flex justify-between items-center px-10 bg-navbar shadow fixed'>
            <section>
                <span className='text-3xl text-logo font-medium cursor-pointer'>aspire.</span>
                <nav className='w-104 flex justify-between text-lg text-logo font-semibold'>
                    <span className={selectedNav.home ? "h-10 px-5 rounded-full flex justify-center items-center bg-navbuttons cursor-pointer transition-colors" : "h-10 px-5 rounded-full flex justify-center items-center cursor-pointer"} onClick={() => {handleSelectNav('home')}}>
                        <Link to='/'>Home</Link>
                    </span>
                    <span className={selectedNav.about ? "h-10 px-5 rounded-full flex justify-center items-center bg-navbuttons cursor-pointer transition-colors" : "h-10 px-5 rounded-full flex justify-center items-center cursor-pointer"} onClick={() => {handleSelectNav('about')}}>
                        <Link to='/'>About</Link>
                    </span>
                    <span className={selectedNav.projects ? "h-10 px-5 rounded-full flex justify-center items-center bg-navbuttons cursor-pointer transition-colors" : "h-10 px-5 rounded-full flex justify-center items-center cursor-pointer"} onClick={() => {handleSelectNav('projects')}}>
                        <Link to='/'>Projects</Link>
                    </span>
                    <span className={selectedNav.contact ? "h-10 px-5 rounded-full flex justify-center items-center bg-navbuttons cursor-pointer transition-colors" : "h-10 px-5 rounded-full flex justify-center items-center cursor-pointer"} onClick={() => {handleSelectNav('contact')}}>
                        <Link to='/'>Contact us</Link>
                    </span>
                </nav>
            </section>
        </header>
    )
}

export default NavBar;
