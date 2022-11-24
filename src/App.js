import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {

  const [currentPage, setCurrentPage] = useState('about');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
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
