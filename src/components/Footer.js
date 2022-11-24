import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Footer() {

    const icons = [
        {
            name: 'fab fa-github',
            link: 'https://github.com/WrittenInnaCode'
        },
        {
            name: 'fab fa-linkedin',
            link: 'www.linkedin.com/in/inna-sherstnyova-b6a56a1b0'
        },
        {
            name: 'fas fa-at',
            link: 'writteninnacode@gmail.com'
        },
    ]

    return (
        <footer>
            <nav className="navbar fixed-bottom bg-light">

                {icons.map(icon =>
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                )}
            </nav>
        </footer>
    );
}

export default Footer;
