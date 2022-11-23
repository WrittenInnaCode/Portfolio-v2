function Navigation({ setCurrentPage }) {

    return (
        <nav>
            <a href="" onClick={(event) => {
                event.preventDefault(); 
                setCurrentPage('about');
            }}>About Me</a>

            <a href="" onClick={(event) => {
                event.preventDefault(); 
                setCurrentPage('portfolio');
            }}>Portfolio</a>

            <a href="" onClick={(event) => {
                event.preventDefault(); 
                setCurrentPage('contact');
            }}>Contact</a>

            <a href="" >Resume</a>
        </nav>
    );
}

export default Navigation;