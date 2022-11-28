import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { validateEmail } from "../../utils/helpers"

function Contact() {

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const valid = validateEmail(e.target.value);
            if (!valid) {
                setErrorMessage("Please enter a valid email");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} cannot be left blank`);
            } else {
                setErrorMessage("");
            }
        }
    };


    return (
        <div className='content'>

            <h2>Contact Me</h2>

            <div className='contactMe pt-3'>
                <Row className='bg-light bg-opacity-50 rounded-4 p-5 shadow'>
                    <Col sm={8}>
                        <Form>

                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="name"
                                    name="name"
                                    placeholder="Full Name"
                                    onBlur={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    onBlur={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    placeholder="Type your message here" rows={3}
                                    onBlur={handleChange} />
                            </Form.Group>

                            {errorMessage && (
                                <div>
                                    <p className='gradient-text fs-6'>{errorMessage}</p>
                                </div>
                            )}

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