import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {

  const [curentPage, setCurrentPage] = useState('about');

  const renderCurrentPage = () => {
    switch (curentPage) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  }

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />

      {renderCurrentPage()}

      <Footer />
    </>
  );
}

export default App;
