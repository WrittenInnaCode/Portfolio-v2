import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [curentPage, setCurrentPage] = useState('about');
  const renderCurrentPage = () => {
    switch (curentPage) {
      case 'about':
        return <h2>About</h2>;
      case 'portfolio':
        return <h2>Portfolio</h2>;
      case 'contact':
        return <h2>Contact</h2>;
      default:
        return <h2>About</h2>;
    }
  }

  return (
    <>
      <Header
        setCurrentPage={setCurrentPage}
      />
      {renderCurrentPage()}
      <Footer />
    </>
  );
}

export default App;
