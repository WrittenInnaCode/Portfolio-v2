import React from 'react';
import { Row, Col } from 'react-bootstrap';


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
        <div className='content p-4'>
            <div className='d-flex justify-content-center'>
                <div className='bg-light bg-opacity-50  m-5 p-3 shadow iconBox '>

                    <h5 className='border-bottom border-white pb-1 ps-1'>Skills & Technologies</h5>
                    <p className='p-3 ps-1'> I enjoy learning and mastering new technologies. I gained most of these skills in the coding bootcamp.</p>

                    {/* Front-End Icons */}
                    <div className='shadow rounded mb-4'>
                        <div className='text-center'><p className='text-muted pt-2'>Client-Side</p></div>

                        <Row className='mb-4'>
                            {frontIcons.map(frontIcon =>
                                <Col className='iconInfo wrapper ps-2'>
                                    <div className='box1'><i className={frontIcon.icon}></i></div>
                                    <div className='box2'><i className={frontIcon.iconColor}></i></div>

                                    <p className='icontxt text-muted'>{frontIcon.title}</p>

                                </Col>
                            )}
                        </Row>
                    </div>


                    {/* Back-End Icons */}
                    <div className='shadow rounded mb-4'>
                        <div className='text-center'><p className='text-muted pt-2'>Server-Side</p></div>

                        <Row className='mb-4'>
                            {backIcons.map(backIcon =>
                                <Col className='iconInfo wrapper ps-2'>
                                    <div className='box1'><i className={backIcon.icon}></i></div>
                                    <div className='box2'><i className={backIcon.iconColor}></i></div>

                                    <p className='icontxt text-muted'>{backIcon.title}</p>

                                </Col>
                            )}
                        </Row>
                    </div>


                    {/* Other Icons */}
                    <div className='rounded shadow'>
                        <div className='text-center'><p className='text-muted pt-2'>Other</p></div>

                        <Row>
                            {otherIcons.map(otherIcon =>
                                <Col className='iconInfo wrapper ps-2'>
                                    <div className='box1'><i className={otherIcon.icon}></i></div>
                                    <div className='box2'><i className={otherIcon.iconColor}></i></div>

                                    <p className='icontxt text-muted'>{otherIcon.title}</p>

                                </Col>
                            )}
                        </Row>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Resume;