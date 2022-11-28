import React from 'react';

function Navigation({ currentPage, handlePageChange }) {

    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand gradient-text fs-4">Inna Sherstnyova</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">

                            <li className="nav-item">
                                <a href="#about"
                                    onClick={(event) => { event.preventDefault(); handlePageChange('about') }}
                                    className={currentPage === "about" ? "nav-link active" : "nav-link"}
                                >About Me
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#portfolio"
                                    onClick={(event) => { event.preventDefault(); handlePageChange('portfolio') }}
                                    className={currentPage === "portfolio" ? "nav-link active" : "nav-link"}
                                >Portfolio
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#contact"
                                    onClick={(event) => { event.preventDefault(); handlePageChange('contact') }}
                                    className={currentPage === "contact" ? "nav-link active" : "nav-link"}
                                >Contact
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#resume"
                                    onClick={(event) => { event.preventDefault(); handlePageChange('resume') }}
                                    className={currentPage === "resume" ? "nav-link active" : "nav-link"}
                                >Resume
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navigation;