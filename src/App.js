import React, { Component } from 'react';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import Hero from './Sections/Hero';
import Project from './Sections/Project';

class App extends Component {
 render(){
  return (
    <div>
      <Header/>
      <Hero />
      <Project />
      <Footer/>
   </div>
  );
}}

export default App;
