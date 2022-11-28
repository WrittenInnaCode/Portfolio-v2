import React from 'react';
import { Row, Col } from 'react-bootstrap';

function About() {

    const frontIcons = [
        {
            icon: 'devicon-html5-plain devicon',
            iconColor: "devicon-html5-plain colored deviconColor",
            title: 'HTML5',
        },
        {
            icon: 'devicon-css3-plain devicon',
            iconColor: "devicon-css3-plain colored deviconColor",
            title: 'CSS'
        },
        {
            icon: 'devicon-javascript-plain devicon',
            iconColor: "devicon-javascript-plain colored deviconColor",
            title: 'JavaScript'
        },
        {
            icon: 'devicon-jquery-plain devicon',
            iconColor: "devicon-jquery-plain colored deviconColor",
            title: 'jQuery'
        },
        {
            icon: 'devicon-react-original devicon',
            iconColor: "devicon-react-original colored deviconColor",
            title: 'React'
        },
        {
            icon: 'devicon-bootstrap-plain devicon',
            iconColor: "devicon-bootstrap-plain colored deviconColor",
            title: 'Bootstrap'
        },
        {
            icon: 'devicon-handlebars-plain devicon',
            iconColor: "devicon-handlebars-plain colored deviconColor",
            title: 'Handlebars'
        }

    ];

    const backIcons = [
        {
            icon: 'devicon-nodejs-plain devicon',
            iconColor: "devicon-nodejs-plain colored deviconColor",
            title: 'Node'
        },
        {
            icon: 'devicon-express-original devicon',
            iconColor: "devicon-express-original colored deviconColor",
            title: 'Express'
        },
        {
            icon: 'devicon-mysql-plain devicon',
            iconColor: "devicon-mysql-plain colored deviconColor",
            title: 'MySQL'
        },
        {
            icon: 'devicon-sequelize-plain devicon',
            iconColor: "devicon-sequelize-plain colored deviconColor",
            title: 'Sequelize'
        },
        {
            icon: 'devicon-sqlite-plain devicon',
            iconColor: "devicon-sqlite-plain colored deviconColor",
            title: 'SQLite'
        },
        {
            icon: 'devicon-mongodb-plain devicon',
            iconColor: "devicon-mongodb-plain colored deviconColor",
            title: 'MongoDB'
        },
        {
            icon: 'devicon-graphql-plain devicon',
            iconColor: "devicon-graphql-plain colored deviconColor",
            title: 'GraphQL'
        },
    ];

    const otherIcons = [
        {
            icon: 'devicon-heroku-plain devicon',
            iconColor: "devicon-heroku-plain colored deviconColor",
            title: 'Heroku'
        },
        {
            icon: 'devicon-webpack-plain devicon',
            iconColor: "devicon-webpack-plain colored deviconColor",
            title: 'Webpack'
        },
        {
            icon: 'devicon-vscode-plain devicon',
            iconColor: "devicon-vscode-plain colored deviconColor",
            title: 'VSCode'
        },
        {
            icon: 'devicon-git-plain devicon',
            iconColor: "devicon-git-plain colored deviconColor",
            title: 'Git'
        },
        {
            icon: 'devicon-github-original devicon',
            iconColor: "devicon-github-original colored deviconColor",
            title: 'Github'
        },
        {
            icon: 'devicon-jest-plain devicon',
            iconColor: "devicon-jest-plain colored deviconColor",
            title: 'Jest'
        },
        {
            icon: 'devicon-photoshop-plain devicon',
            iconColor: "devicon-photoshop-plain colored deviconColor",
            title: 'Photoshop'
        }
    ];



    return (
        <div className='content pb-5'>
            <h2>About Me</h2>

            <div className='aboutBox bg-light bg-opacity-50 rounded-4 shadow'>

                <div className='about'>
                    <div className='hiBox'>
                        <p>Hi, I'm Inna. 👋 </p>
                        <p>I am a full-stack web developer based in Los Angeles, CA.  I am
                            finishing up the coding bootcamp through UCLA Extension
                            and I am excited about all the new things I've learned.
                            Check out my portfolio to see some of my projects!</p>
                    </div>

                    <img className='photo ' src={require('../../assets/images/Inna-2.jpg')}
                        alt='Pic of Inna'>
                    </img>
                </div>

                <h2 className='ps-5 fs-3'>Skills & Technologies</h2>


                <Row className='skills mx-5 mt-4 pb-5'>

                    {/* Front-End Icons */}
                    <Col className='shadow rounded mx-2 mb-2'>
                        <div className='text-center'>
                            <p className='text-muted pt-2'>Client-Side</p>

                            {frontIcons.map(frontIcon =>
                                <Col className='wrapper ps-2'>
                                    <div className='box1'><i className={frontIcon.icon}></i></div>
                                    <div className='box2'><i className={frontIcon.iconColor}></i></div>
                                    <p className='icontxt text-muted'>{frontIcon.title}</p>

                                </Col>
                            )}
                        </div>
                    </Col>


                    {/* Back-End Icons */}
                    <Col className='shadow rounded mx-2 mb-2'>
                        <div className='text-center'>
                            <p className='text-muted pt-2'>Server-Side</p>

                            {backIcons.map(backIcon =>
                                <Col className='wrapper ps-2'>
                                    <div className='box1'><i className={backIcon.icon}></i></div>
                                    <div className='box2'><i className={backIcon.iconColor}></i></div>
                                    <p className='icontxt text-muted'>{backIcon.title}</p>

                                </Col>
                            )}
                        </div>
                    </Col>


                    {/* Other Icons */}
                    <Col className='shadow rounded mx-2 mb-2'>
                        <div className='text-center'>
                            <p className='text-muted pt-2'>Other</p>

                            {otherIcons.map(otherIcon =>
                                <Col className='wrapper ps-2'>
                                    <div className='box1'><i className={otherIcon.icon}></i></div>
                                    <div className='box2'><i className={otherIcon.iconColor}></i></div>
                                    <p className='icontxt text-muted'>{otherIcon.title}</p>

                                </Col>
                            )}
                        </div>
                    </Col>

                </Row>


            </div>

        </div>

    )
}

export default About;