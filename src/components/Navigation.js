import React from 'react';
function Navigation({ setCurrentPage }) {

    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand gradient-text fs-4" href="#">Inna Sherstnyova</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">

                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('about');
                                }}>About Me</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('portfolio');
                                }}>Portfolio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('contact');
                                }}>Contact</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('resume');
                                }}>Resume</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navigation;