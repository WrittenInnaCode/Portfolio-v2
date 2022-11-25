import React from 'react';

function Project({ project }) {

    const { name, description, deployedLink, githubLink, imageUrl } = project;

    return (

        <div className="portfolio-box " key={name}>
            <img
                src={require(`../assets/images/portfolio/${imageUrl}`)}
                alt={name}
                className="img-fluid"
            />
            <div className="portfolio-caps">
                <div className="portfolio-content gradient-text">

                    <a href={deployedLink} target="_blank" rel="noreferrer">{name}</a> {" "}
                    <a href={githubLink} target="_blank" rel="noreferrer"><i className='fab fa-github'></i></a>
                    <p className="fs-6">{description}</p>

                </div>
            </div>

        </div>

    )
}

export default Project;