import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Model from './components/model';
import Banner from './components/bannar';
import Features from './components/features';
import Organisations from './components/organisations';
import Cta from './components/cta';
import Workshop from './components/workshop';
import FacMem from './components/facmem';
import Test from './components/test';
import Courses from './components/courses';
import Price from './components/price';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return(
        <>
          <NavBar />
          <Model />
          <Banner />
          <Features />
          <Organisations />
          <Cta />
          <Workshop />
          <FacMem />
          <Test />
          <Courses />
          <Price />
          <Contact />
          <Footer />
        </>
    );
  }
}

export default App;
