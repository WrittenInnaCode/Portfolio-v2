import React from 'react';
import Navigation from './Navigation'

function Header({ setCurrentPage }) {
    return (
        <header>
            {/* <h1 className='gradient-text'>Inna Sherstnyova</h1> */}
            <Navigation setCurrentPage={setCurrentPage} />
        </header>
    );
}

export default Header;