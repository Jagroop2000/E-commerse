import React, { useState } from 'react';
import Header from './Navbar/Header';
import Carousel from './Carosel/Carousel';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
import Stats from './Stats/Stats';
import NavNext from './NavNext/NavNext';
import Poster from './Poster/Poster';

function App() {
  return (
    <div>
      <Header />
      <NavNext />

      <Carousel />
      <Cards category="men's clothing" />
      <Cards category='electronics' />
      <Cards category='jewelery' />

      <Poster />

      <Stats />

      <Footer />
    </div>
  );
}

export default App;
