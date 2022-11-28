import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Pdf from '../../assets/files/Resume.pdf';


function Resume() {

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
        <div className='resume p-4'>

            <div className='aboutBox bg-light bg-opacity-50 rounded-4 shadow p-4 mb-4'>

                <div className='bg-light bg-opacity-50 rounded-4 mb-5 p-4 shadow text-center'>
                    <p>Download my Resume:</p>
                    <a href={Pdf} download><Button variant="light">Resume <i class="fa-solid fa-file-arrow-down resumeIcon"></i></Button></a>
                </div>

                <div className='rounded-4 p-3 iconBox text-center'>

                    <h5 className='gradient-text border-bottom border-2 border-white pb-1 ps-1 fs-4'>Skills & Technologies</h5>
                    <p className='text-center p-4 ps-1'> I enjoy learning and mastering new technologies. I gained most of these skills in the coding bootcamp.</p>

                    {/* Front-End Icons */}
                    <div className='iconBox shadow rounded'>
                        <div className='text-center'><p className='text-muted pt-2'>Client-Side</p></div>

                        <Row>
                            <div className='iconsFlex'>
                                {frontIcons.map(frontIcon =>
                                    <Col className='iconInfo text-center wrapper px-2'>
                                        <div className='box1'><i className={frontIcon.icon}></i></div>
                                        <div className='box2'><i className={frontIcon.iconColor}></i></div>

                                        <p className='icontxt text-muted'>{frontIcon.title}</p>

                                    </Col>
                                )}
                            </div>
                        </Row>
                    </div>


                    {/* Back-End Icons */}
                    <div className='iconBox shadow rounded'>
                        <div className='text-center'><p className='text-muted pt-2'>Server-Side</p></div>

                        <Row>
                            <div className='iconsFlex'>
                                {backIcons.map(backIcon =>
                                    <Col className='iconInfo text-center wrapper px-2'>
                                        <div className='box1'><i className={backIcon.icon}></i></div>
                                        <div className='box2'><i className={backIcon.iconColor}></i></div>

                                        <p className='icontxt text-muted'>{backIcon.title}</p>

                                    </Col>
                                )}
                            </div>
                        </Row>
                    </div>


                    {/* Other Icons */}
                    <div className='iconBox rounded shadow mb-1'>
                        <div className='text-center'><p className='text-muted pt-2'>Other</p></div>

                        <Row>
                            <div className='iconsFlex'>
                                {otherIcons.map(otherIcon =>
                                    <Col className='iconInfo text-center wrapper px-2'>
                                        <div className='box1'><i className={otherIcon.icon}></i></div>
                                        <div className='box2'><i className={otherIcon.iconColor}></i></div>

                                        <p className='icontxt text-muted'>{otherIcon.title}</p>

                                    </Col>
                                )}
                            </div>
                        </Row>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Resume;