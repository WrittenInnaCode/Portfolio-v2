import React from 'react';

function Project({ project }) {

    const { name, description, deployedLink, githubLink, image } = project;

    return (
        <div>
            <div className='media-portfolio-1'>
                <div className="portfolio-box" key={name}>
                    <img
                        src={require(`../assets/images/portfolio/${image}`)}
                        alt={name}
                        className="img-fluid"
                    />
                    <div className="portfolio-caps">
                        <div className="portfolio-content gradient-text text-center">

                            <a className="appLink fs-4 fw-bold" href={deployedLink} target="_blank" rel="noreferrer">{name}</a>
                            <p className="appDescription">{description}</p>
                            <a className="githubLink fw-semibold" href={githubLink} target="_blank" rel="noreferrer"><i className='fab fa-github'></i> Github Repo</a>

                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='media-portfolio-2'>
                <div className="portfolio-box-media text-center bg-light bg-opacity-50 shadow p-1" key={name}>
                    <a href={deployedLink} target="_blank" rel="noreferrer"><img
                        src={require(`../assets/images/portfolio/${image}`)}
                        alt={name}
                        className="img-fluid"
                    /></a>
                    <div className="portfolio-caps-media">
                        <div className="portfolio-content-media gradient-text text-center pt-2">

                            <a href={deployedLink} target="_blank" rel="noreferrer">{name}</a> <br />
                            <a href={githubLink} target="_blank" rel="noreferrer"><i className='fab fa-github'></i> Repo</a>
                            <p className="fs-6">{description}</p>

                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Project;