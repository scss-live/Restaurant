import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h4>Restaurant Name</h4>
                        <p>Experience the finest dining with our carefully crafted dishes and exceptional service.</p>
                        <div className="social-links">
                            <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
                            <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
                            <a href="#" className="text-white"><FaInstagram size={24} /></a>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h4>Contact Info</h4>
                        <p><FaPhone className="me-2" /> <a href="tel:+91-7053068424" className="text-white text-decoration-none">+91-7053068424</a></p>
                        <p><FaEnvelope className="me-2" /> <a href="mailto:test705306@gmail.com" className="text-white text-decoration-none">test705306@gmail.com</a></p>
                        <p>123 Restaurant Street,<br />City Name, State - 123456</p>
                    </Col>
                    <Col md={4}>
                        <h4>Opening Hours</h4>
                        <p>Monday - Friday<br />11:00 AM - 10:00 PM</p>
                        <p>Saturday - Sunday<br />10:00 AM - 11:00 PM</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <hr className="my-4" />
                        <p className="mb-0">&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
