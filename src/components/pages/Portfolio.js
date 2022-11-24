import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: "Courier App",
            description: "Javascript/Express/Sequelize/Handlebars",
            deployedLink: "https://courier-share.herokuapp.com/info",
            githubLink: "https://github.com/joejhansen/courier-app",
            imageUrl: "14-courier.png"
        },
        {
            name: "Tech Blog",
            description: "Node/MySQL/Sequalize",
            deployedLink: "https://writteninnacode-techblog.herokuapp.com",
            githubLink: "https://github.com/WrittenInnaCode/Tech_Blog",
            imageUrl: "11-techblog.png"
        },
        {
            name: "Weather Dashboard",
            description: "Javascript/API/Bootstrap",
            deployedLink: "https://writteninnacode.github.io/Weather_Dashboard/",
            githubLink: "https://github.com/WrittenInnaCode/Weather_Dashboard",
            imageUrl: "04-weather-dashboard.png"
        },
        {
            name: "Cocktails App",
            description: "Javascript, HTML, CSS",
            deployedLink: "https://jamesdartmouth.github.io/Cocktails-with-Kanye/",
            githubLink: "https://github.com/WrittenInnaCode/Cocktails-with-Kanye",
            imageUrl: "05-cocktails.png"
        },
        {
            name: "Team Generator",
            description: "Javascript/NodeJS/HTML",
            deployedLink: "https://drive.google.com/file/d/1cH1TXfoxr3lshCsMHWP3k2lzU_CL-cNZ/view",
            githubLink: "https://github.com/WrittenInnaCode/Team_Generator",
            imageUrl: "07-team-generator.png"
        },
        {
            name: "Just Another Text Editor",
            description: "Javascript/HTML/CSS",
            deployedLink: "https://writteninnacode-text-editor.herokuapp.com",
            githubLink: "https://github.com/WrittenInnaCode/PWA-Text-Editor",
            imageUrl: "13-jate.png"
        },
        {
            name: "Code Quiz",
            description: "Javascript/jQuery/CSS",
            deployedLink: "https://writteninnacode.github.io/quiz_challenge/",
            githubLink: "https://github.com/WrittenInnaCode/quiz_challenge",
            imageUrl: "02-quiz.png"
        },
        {
            name: "Note Taker",
            description: "Javascript/Express/NodeJS",
            deployedLink: "https://coherent-silken-peripheral.glitch.me",
            githubLink: "https://github.com/WrittenInnaCode/Note_Taker",
            imageUrl: "08-notetaker.png"
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