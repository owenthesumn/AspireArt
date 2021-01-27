import React from 'react';
import { HashRouter as Route, Router } from 'react-router-dom'
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Products from './sections/Products';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Route path='/'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/products'>
        <Products/>
      </Route>
      <Route path='/contact'>
        <Contact/>
      </Route>
    </React.Fragment>
  );
}

export default App;
