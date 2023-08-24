import React from 'react';

function Footer() {

    const icons = [
        {
            name: 'fa-brands fa-github',
            link: 'https://github.com/WrittenInnaCode'
        },
        {
            name: 'fa-brands fa-linkedin',
            link: 'https://www.linkedin.com/in/inna-sitnitski/'
        },
        {
            name: 'fa-solid fa-at',
            link: 'mailto:writteninnacode@gmail.com'
        },
    ]

    return (
        <footer className='footer'>
            <div className="fixed-bottom d-flex justify-content-center bg-light ">

                {icons.map(icon =>
                    <div className='p-1 mx-3 gradient-text opacity-75 fs-3'>
                        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                    </div>
                )}
            </div>
        </footer>
    );
}

export default Footer;
