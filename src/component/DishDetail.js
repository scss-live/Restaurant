import React, { useState } from 'react';
import { Card, Button, Row, Col, Form, Modal } from 'react-bootstrap';

function DishDetail({ dish, onClose }) {
    const [quantity, setQuantity] = useState(1);
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [showOrderModal, setShowOrderModal] = useState(false);

    const handleOrder = () => {
        setShowOrderModal(true);
    };

    return (
        <>
            <Modal show={true} onHide={onClose} size="lg" centered className="dish-detail-modal">
                <Modal.Header closeButton className="bg-dark text-white">
                    <Modal.Title>{dish.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-white">
                    <Row>
                        <Col md={6}>
                            <img src={dish.image} alt={dish.name} className="w-100 rounded mb-3" />
                        </Col>
                        <Col md={6}>
                            <h3>₹{dish.price}</h3>
                            <p className="text-muted">{dish.category}</p>
                            <p>{dish.description}</p>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        min="1" 
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        className="bg-dark text-white"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Special Instructions</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={3}
                                        value={specialInstructions}
                                        onChange={(e) => setSpecialInstructions(e.target.value)}
                                        placeholder="Any special requests?"
                                        className="bg-dark text-white"
                                    />
                                </Form.Group>
                                <Button variant="outline-light" onClick={handleOrder} className="w-100">
                                    Add to Order - ₹{dish.price * quantity}
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <Modal show={showOrderModal} onHide={() => setShowOrderModal(false)} centered className="order-confirm-modal">
                <Modal.Header closeButton className="bg-dark text-white">
                    <Modal.Title>Order Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-white">
                    <p>Your order has been added to the cart!</p>
                    <div className="order-summary">
                        <p><strong>{dish.name}</strong> x {quantity}</p>
                        <p>Total: ₹{dish.price * quantity}</p>
                        {specialInstructions && (
                            <p>Special Instructions: {specialInstructions}</p>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-dark text-white">
                    <Button variant="outline-light" onClick={() => setShowOrderModal(false)}>
                        Continue Shopping
                    </Button>
                    <Button variant="light" onClick={() => window.location.href = '/cart'}>
                        Go to Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DishDetail;
