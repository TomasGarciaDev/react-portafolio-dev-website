import React from 'react';
import Header from './componets/header/Header'; 
import About from './componets/about/About';
import Contact from './componets/contact/Contact';
import Portofolio from './componets/portofolio/Portofolio';
import Footer from './componets/footer/Footer';
import Navbar from './componets/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App