import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <div className='content'>

            <h2>Contact Me</h2>

            <div className='contactMe pt-3 m-5'>
                <Row className='bg-light bg-opacity-50 rounded-4 p-5 shadow'>
                    <Col sm={8}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="name" placeholder="Full Name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Type your message here" rows={3} />
                            </Form.Group>
                            <Button variant="light">Send</Button>
                        </Form>
                    </Col>

                    <Col sm={4} className='d-flex justify-content-center flex-column text-center'>

                        <div className='octoBox'>
                            <img className='octocat' src={require('../../assets/images/octocatInna.png')}
                                alt='octocat Inna'>
                            </img>
                        </div>

                        <p> If you'd like to get in touch with me, please fill out this contact form or email me directly and I will get back to you as soon as possible.</p>
                        <p><a href='mailto:writteninnacode@gmail.com' className='gradient-text fs-5'>writteninnacode@gmail.com</a></p>

                    </Col>


                </Row>

            </div>

        </div>
    )
}

export default Contact;