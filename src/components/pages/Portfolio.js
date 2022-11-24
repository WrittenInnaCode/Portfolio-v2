import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: "Courier App",
            description: "Javascript, HTML, CSS",
            deployedLink: "github.com",
            githubLink: "github.com",
            imageUrl: "14-courier.png"
        },
        {
            name: "techblog",
            description: "Javascript, HTML, CSS",
            deployedLink: "github.com",
            githubLink: "github.com",
            imageUrl: "11-techblog.png"
        },
        {
            name: "Weather Dashboard",
            description: "Javascript, HTML, CSS",
            deployedLink: "github.com",
            githubLink: "github.com",
            imageUrl: "04-weather-dashboard.png"
        },
        {
            name: "Cocktails App",
            description: "Javascript, HTML, CSS",
            deployedLink: "github.com",
            githubLink: "github.com",
            imageUrl: "05-cocktails.png"
        },
        {
            name: "Team Generator",
            description: "Javascript, HTML, CSS",
            deployedLink: "github.com",
            githubLink: "github.com",
            imageUrl: "07-team-generator.png"
        },
        {
            name: "Just Another Text Editor",
            description: "Javascript, HTML, CSS",
            deployedLink: "github.com",
            githubLink: "github.com",
            imageUrl: "13-jate.png"
        }
    ])

    return(
        <section>
            <h2>Portfolio</h2>
            {projects.map((project, i ) => (
                <Project project={project} key={"project" + i} />
            ))}

        </section>
    )
}

export default Portfolio;