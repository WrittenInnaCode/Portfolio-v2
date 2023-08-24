import React, { useRef, useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
// import { validateEmail } from "../../utils/helpers"
import emailjs from '@emailjs/browser';

function Contact() {

    // const [errorMessage, setErrorMessage] = useState("");

    // const handleChange = (e) => {
    //     if (e.target.name === "email") {
    //         const valid = validateEmail(e.target.value);
    //         if (!valid) {
    //             setErrorMessage("Please enter a valid email");
    //         } else {
    //             setErrorMessage("");
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`Your ${e.target.name} cannot be left blank`);
    //         } else {
    //             setErrorMessage("");
    //         }
    //     }
    // };


    const [formState, setFormState] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const [hiddenState, setHiddenState] = useState(true);

    const { user_name, user_email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a450rd2', 'template_yp6q3cw', form.current, 'NgPjSMCh3eb4HB0WL')
            .then((result) => {
                console.log(result.text);

                setFormState({ user_name: "", user_email: "", message: "" })
                setHiddenState(false);

            })
            .catch((error) => {
                console.log(error.text);
            });

        setHiddenState(true);
    }


    return (
        <div className='content'>

            <h2>Contact Me</h2>

            <div className='contactMe pt-3'>
                <Row className='bg-light bg-opacity-50 rounded-4 p-5 shadow'>
                    <Col sm={8}>
                        <Form ref={form} onSubmit={sendEmail} className="contact-form">

                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    required
                                    type="name"
                                    value={user_name}
                                    name="user_name"
                                    placeholder="Full Name"
                                    className="name-input"
                                    onChange={handleChange}
                                // name="name"
                                // onBlur={handleChange} 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    value={user_email}
                                    name="user_email"
                                    placeholder="name@example.com"
                                    className="email-input"
                                    onChange={handleChange}
                                // name="email"
                                // onBlur={handleChange} 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    name="message"
                                    value={message}
                                    placeholder="Type your message here" rows={3}
                                    onChange={handleChange}
                                // onBlur={handleChange} 
                                />
                            </Form.Group>

                            {/* {errorMessage && (
                                <div>
                                    <p className='gradient-text fs-6'>{errorMessage}</p>
                                </div>
                            )} */}

                            <Button variant="light" type="submit" value="send" id="send-email">Send</Button>

                            <div className='mt-4'>
                                <Alert variant="success" className={hiddenState ? "hidden" : ""}>
                                    Thank you, your message has been sent!
                                </Alert>
                            </div>
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