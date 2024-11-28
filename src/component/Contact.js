import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <Container className="py-5" id="contact">
            <h2 className="text-white text-center mb-5">Contact Us</h2>
            <Row>
                <Col md={4}>
                    <Card className="bg-dark text-white mb-4">
                        <Card.Body className="text-center">
                            <FaPhone className="display-4 mb-3" />
                            <h4>Phone</h4>
                            <p className="mb-0">
                                <a href="tel:+91-7053068424" className="text-white text-decoration-none">
                                    +91-7053068424
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark text-white mb-4">
                        <Card.Body className="text-center">
                            <FaEnvelope className="display-4 mb-3" />
                            <h4>Email</h4>
                            <p className="mb-0">
                                <a href="mailto:test705306@gmail.com" className="text-white text-decoration-none">
                                    test705306@gmail.com
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark text-white mb-4">
                        <Card.Body className="text-center">
                            <FaMapMarkerAlt className="display-4 mb-3" />
                            <h4>Location</h4>
                            <p className="mb-0">123 Restaurant Street,<br />City Name, State - 123456</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col md={6} className="mx-auto">
                    <Card className="bg-dark text-white">
                        <Card.Body>
                            <h3 className="text-center mb-4">Send us a Message</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        required
                                        className="bg-dark text-white"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                        className="bg-dark text-white"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        required
                                        className="bg-dark text-white"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        required
                                        className="bg-dark text-white"
                                    />
                                </Form.Group>
                                <Button variant="light" type="submit" className="w-100">
                                    Send Message
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-73.9482!3d40.7486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcyNy42Ik4gNzPCsDU2JzUzLjUiVw!5e0!3m2!1sen!2sus!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
