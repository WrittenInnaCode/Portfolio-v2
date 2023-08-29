import React, { useState } from 'react';
import Project from '../Project';
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
    const [projects] = useState([
        {
            name: "in_tangible.obj",
            description: "React, GraphQL, Node.js, Express.js, MongoDB, Mongoose, JWT, SemanticUI",
            deployedLink: "https://in-tangible-obj.herokuapp.com/",
            githubLink: "https://github.com/WrittenInnaCode/intangible.obj",
            image: "15-intangible.png"
        },
        {
            name: "Courier App",
            description: "Node.js, Javascript, Express.js, MySQL2, Sequelize, Handlebars.js",
            deployedLink: "https://courier-share.herokuapp.com/info",
            githubLink: "https://github.com/joejhansen/courier-app",
            image: "14-courier.png"
        },
        {
            name: "Tech Blog",
            description: "Node, MySQL2, Sequalize, Handlebars.js",
            deployedLink: "https://writteninnacode-techblog.herokuapp.com",
            githubLink: "https://github.com/WrittenInnaCode/Tech_Blog",
            image: "11-techblog.png"
        },
        // {
        //     name: "Cocktails App",
        //     description: "Javascript, HTML, CSS, Bulma",
        //     deployedLink: "https://jamesdartmouth.github.io/Cocktails-with-Kanye/",
        //     githubLink: "https://github.com/WrittenInnaCode/Cocktails-with-Kanye",
        //     image: "05-cocktails.png"
        // },
        {
            name: "Just Another Text Editor",
            description: "Javascript, Express.js, IndexedDB",
            deployedLink: "https://writteninnacode-text-editor.herokuapp.com",
            githubLink: "https://github.com/WrittenInnaCode/PWA-Text-Editor",
            image: "13-jate.png"
        },
        {
            name: "Weather Dashboard",
            description: "Javascript, OpenWeather API, jQuery, Moment.js, Bootstrap",
            deployedLink: "https://writteninnacode.github.io/Weather_Dashboard/",
            githubLink: "https://github.com/WrittenInnaCode/Weather_Dashboard",
            image: "04-weather-dashboard.png"
        },
        {
            name: "Team Profile Generator",
            description: "Javascript, NodeJS, Inquirer, Jest, HTML",
            deployedLink: "https://drive.google.com/file/d/1cH1TXfoxr3lshCsMHWP3k2lzU_CL-cNZ/view",
            githubLink: "https://github.com/WrittenInnaCode/Team_Generator",
            image: "07-team-generator.png"
        },
        {
            name: "Code Quiz",
            description: "Javascript, HTML, CSS",
            deployedLink: "https://writteninnacode.github.io/quiz_challenge/",
            githubLink: "https://github.com/WrittenInnaCode/quiz_challenge",
            image: "02-quiz.png"
        },
        {
            name: "Note Taker",
            description: "Javascript, Express.js, NodeJS",
            deployedLink: "https://coherent-silken-peripheral.glitch.me",
            githubLink: "https://github.com/WrittenInnaCode/Note_Taker",
            image: "08-notetaker.png"
        },
        {
            name: "Social Network API",
            description: "Javascript, Express.js, MongoDB, Mongoose",
            deployedLink: "https://coherent-silken-peripheral.glitch.me",
            githubLink: "https://github.com/WrittenInnaCode/Note_Taker",
            image: "12-social-network.png"
        },
        {
            name: "E-commerce Back-End",
            description: "Javascript, Express.js, Sequelize, MySQL2",
            deployedLink: "https://drive.google.com/file/d/1NTfci7-Cof0lJRJ41d06fABBXzNGwxFC/view",
            githubLink: "https://github.com/WrittenInnaCode/E-commerce_Back_End",
            image: "10-ecommerce.png"
        },
        {
            name: "Employee Tracker",
            description: "Javascript, Node.js, Inquirer, MySQL2, console.table",
            deployedLink: "https://drive.google.com/file/d/1vr-zqlxnBwrkt8yWQ14ceHuF048aZcuH/view",
            githubLink: "https://github.com/WrittenInnaCode/Employee_Tracker",
            image: "09-employee-tracker.png"
        },
        {
            name: "Workday Scheduler",
            description: "Javascript, jQuery, Moment.js",
            deployedLink: "https://writteninnacode.github.io/Work_Day_Scheduler/",
            githubLink: "https://github.com/WrittenInnaCode/Work_Day_Scheduler",
            image: "03-workday-scheduler.png"
        }
    ])

    return (
        <div className='content pb-5'>

            <h2>Portfolio</h2>

            <Container className='bg-light bg-opacity-50 rounded-4 shadow mt-5 mb-5'>
                <Row className='portfolio p-3'>
                    {projects.map((project, i) => (
                        <Col xs={6} md={4} className='project-col'>
                            <Project project={project} key={"project" + i} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;