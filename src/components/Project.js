import React from 'react';

function Project({ project }) {

    const { name, description, deployedLink, githubLink, imageUrl } = project;

    return (
        <div className="col-lg-4 col-sm-6">
            <div className="portfolio-box" key={name}>
                <img
                    src={require(`../assets/images/portfolio/${imageUrl}`)}
                    alt={name}
                    className="img-fluid"
                />
                <div className="portfolio-caps">
                    <div className="portfolio-content gradient-text">

                        <a href={deployedLink}>{name}</a> {" "}
                        <a href={githubLink}><i className='fab fa-github'></i></a>
                        <p className="gradient-text fs-6">{description}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;