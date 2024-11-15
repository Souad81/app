import React from 'react';

import './assets/css/q-test.css';
import Header from './components/Header';
import Pawer from './components/Pawer';
import Brands from './components/Brands';
import HowItworks from './components/HowItworks';
import Transfer from './components/Transfer';
import YourMoney from './components/YourMoney';
import Contacts from './components/Contacts';
import Clients from './components/Clients';
import Questions from './components/Questions';
import Questions2 from './components/Questions2';
import MobileContactSection from './components/MobileContactSection';
import Subscribe from './components/Subscribe';
import ImageGallery from './components/ImageGallery';
import Features from './components/Features';
import Footer from './components/Footer';



function App() {
  return (
    
      <div className="wrapper">
        <Header />
       
        <main id="main">
          <Pawer />
          <Brands />
          <Features />
          <HowItworks />
          <ImageGallery />
          <Transfer />
          <YourMoney />
          <Contacts />
          <Clients />
          <Questions />
          <Questions2 />
          <MobileContactSection />
          <Subscribe />
        </main>
        <Footer />
      </div>
    
  );
}

export default App;
