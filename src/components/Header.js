import React from 'react';
import Navigation from './Navigation'

function Header({ currentPage, setCurrentPage }) {

    return (
        <header>
            <Navigation 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
        </header>
    );
}

export default Header;