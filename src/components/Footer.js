import React from 'react';

function Footer() {

    const icons = [
        {
            name: 'fab fa-github',
            link: 'https://github.com/WrittenInnaCode'
        },
        {
            name: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/inna-sherstnyova-b6a56a1b0'
        },
        {
            name: 'fas fa-at',
            link: 'mailto:writteninnacode@gmail.com'
        },
    ]

    return (
        <footer className='footer'>
            <div className=" d-flex justify-content-center bg-light">

                {icons.map(icon =>
                    <div className='px-2 gradient-text opacity-75 fs-5'>
                        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                    </div>
                )}
            </div>
        </footer>
    );
}

export default Footer;
