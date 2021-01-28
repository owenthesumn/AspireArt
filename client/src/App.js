import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll, scroller as scroll } from 'react-scroll';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Products from './sections/Products';
import NavBar from './components/NavBar';
import './App.css';
import Section from './components/Section';

function App() {
  const [selectedNav, setSelectedNav] = useState({home: true, about: false, projects:false, contact: false});
  const [selectedBtn, setSelectedBtn] = useState({home: true, contact: false});
  const [darkSect, setDarkSect] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProducts = useRef(null);
  const refContact = useRef(null);

  const pageContentArray = [<Home ref={refHome}/>, <About ref={refAbout}/>, <Products ref={refProducts}/>, <Contact ref={refContact}/>];

  useEffect(() => {
      window.addEventListener('wheel', handelWheel);
      // console.log(selectedBtn.home);
      console.log(selectedBtn.contact);
      if (pageIndex === 0 || pageIndex === 2) {
        if (selectedBtn.home !== true) {
          setDarkSect(false);
        }
      } else {
        if (selectedBtn.contact !== true) {
          setDarkSect(true);
          setSelectedBtn({home:false, contact:true})
        }
      }
      console.log(pageIndex);
      return(() => {
        window.removeEventListener('wheel', handelWheel);
      })
  })

  function handelWheel(Event) {
    let selectedButton;
    setTimeout(() => {
      if (Event.deltaY > 0 && pageIndex < 3) {
        setPageIndex(pageIndex+1);
        selectedButton = {home: false, contact: false};
        setSelectedBtn(selectedButton);
      } else if (Event.deltaY <= 0 && pageIndex > 0 ) {
        setPageIndex(pageIndex-1);
        selectedButton = {home: true, contact: false};
        setSelectedBtn(selectedButton);
      }
    }, 500);
  }

  const handleSelectNav = (selected) => {
    let selectedButton;
    if (selected === 'home') {
        selectedButton = {home: true, about: false, projects:false, contact: false};
        setDarkSect(false);
        setPageIndex(0);
    } else if (selected === 'about') {
        selectedButton = {home: false, about: true, projects:false, contact: false};
        setDarkSect(true);
        setPageIndex(1);
    } else if (selected === 'projects') {
        selectedButton = {home: false, about: false, projects:true, contact: false}
        setDarkSect(false);
        setPageIndex(2);
    } else {
        selectedButton = {home: false, about: false, projects:false, contact: true}
        setDarkSect(true);
        setPageIndex(3);
    }
    setSelectedNav(selectedButton);
  }

  return (
      <main className="h-screen w-screen relative">
          <NavBar darkSect={darkSect} selectedNav={selectedNav} handleSelectNav={handleSelectNav}/>
          {pageContentArray.map((pageContent, index) => {
            let pageClass = 'h-full w-full transition-all duration-500 ease-in-out transform translate-y-full absolute top-0 left-0 opacity-0';
            if (pageIndex === index) {
              pageClass = 'h-full w-full transition-all duration-500 absolute top-0 left-0';
            }
            if (pageIndex < index) {
              pageClass = 'h-full w-full transition-all duration-500 ease-in-out transform -translate-y-full absolute top-0 left-0 opacity-0';
            }
            return (
              <Section key={index} index={index} pageContent={pageContent} pageClass={pageClass}/>
            );
          })}
      </main>
  );
}

export default App;
