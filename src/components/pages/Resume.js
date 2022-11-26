import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Resume() {

    const frontIcons = [
        {
            icon: 'devicon-html5-plain devicon',
            title: 'HTML5'
        },
        {
            icon: 'devicon-css3-plain devicon',
            title: 'CSS'
        },
        {
            icon: 'devicon-javascript-plain devicon',
            title: 'JavaScript'
        },
        {
            icon: 'devicon-jquery-plain devicon',
            title: 'jQuery'
        },
        {
            icon: 'devicon-react-original devicon',
            title: 'React'
        },
        {
            icon: 'devicon-bootstrap-plain devicon',
            title: 'Bootstrap'
        },
        {
            icon: 'devicon-handlebars-plain devicon',
            title: 'Handlebars'
        }

    ];

    const backIcons = [
        {
            icon: 'devicon-nodejs-plain devicon',
            title: 'Node'
        },
        {
            icon: 'devicon-express-original devicon',
            title: 'Express'
        },
        {
            icon: 'devicon-mysql-plain devicon',
            title: 'MySQL'
        },
        {
            icon: 'devicon-sequelize-plain devicon',
            title: 'Sequelize'
        },
        {
            icon: 'devicon-sqlite-plain devicon',
            title: 'SQLite'
        },
        {
            icon: 'devicon-mongodb-plain devicon',
            title: 'MongoDB'
        },
        {
            icon: 'devicon-graphql-plain devicon',
            title: 'GraphQL'
        },
    ];

    const otherIcons = [
        {
            icon: 'devicon-heroku-plain devicon',
            title: 'Heroku'
        },
        {
            icon: 'devicon-webpack-plain devicon',
            title: 'Webpack'
        },
        {
            icon: 'devicon-vscode-plain devicon',
            title: 'VSCode'
        },
        {
            icon: 'devicon-git-plain devicon',
            title: 'Git'
        },
        {
            icon: 'devicon-github-original devicon',
            title: 'Github'
        },
        {
            icon: 'devicon-jest-plain devicon',
            title: 'Jest'
        },
        {
            icon: 'devicon-photoshop-plain devicon',
            title: 'Photoshop'
        }
    ];


    return (

        <div>


        <Container className='p-3 pt-5'>

            <div className=' bg-light bg-opacity-50 rounded-4 p-4 shadow'>

            <h4 className='border-bottom border-white pb-1 ps-1'>Skills & Technologies</h4>
            <p className='p-3 ps-1'> I enjoy learning and mastering new technologies. I gained most of these skills in the coding bootcamp I am currently in.</p>

                {/* Front-End Icons */}
                <div className=' shadow rounded mb-4'>
                    <div className='text-center'><p className='text-muted fs-4 pt-2'>Client-Side</p></div>

                    <Row className='mb-4'>
                        {frontIcons.map(frontIcon =>
                            <Col className='iconText'>
                                <i className={frontIcon.icon}></i>

                                <p className='whitetxt'>{frontIcon.title}</p>

                            </Col>
                        )}
                    </Row>
                </div>


                {/* Back-End Icons */}
                <div className=' shadow rounded mb-4'>
                    <div className='text-center'><p className='text-muted fs-4 pt-2'>Server-Side</p></div>

                    <Row className='mb-4'>
                        {backIcons.map(backIcon =>
                            <Col className='iconText'>
                                <i className={backIcon.icon}></i>

                                <p className='whitetxt'>{backIcon.title}</p>

                            </Col>
                        )}
                    </Row>
                </div>


                {/* Other Icons */}
                <div className=' rounded shadow'>
                    <div className='text-center'><p className='text-muted fs-4 pt-2'>Other</p></div>

                    <Row>
                        {otherIcons.map(otherIcon =>
                            <Col className='iconText'>
                                <i className={otherIcon.icon}></i>

                                <p className='whitetxt'>{otherIcon.title}</p>

                            </Col>
                        )}
                    </Row>
                </div>

            </div>
        </Container>
        </div>

    );
}

export default Resume;