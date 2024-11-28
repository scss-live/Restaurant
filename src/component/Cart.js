import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleCheckout = () => {
        // Implement checkout logic here
        alert('Order placed successfully!');
    };

    return (
        <Container className="py-5">
            <h2 className="text-white mb-4">Your Cart</h2>
            <Row>
                <Col md={8}>
                    {cartItems.length === 0 ? (
                        <Card className="bg-dark text-white mb-4">
                            <Card.Body>
                                <p className="mb-0">Your cart is empty</p>
                            </Card.Body>
                        </Card>
                    ) : (
                        cartItems.map((item, index) => (
                            <Card key={index} className="bg-dark text-white mb-3">
                                <Card.Body>
                                    <Row>
                                        <Col md={3}>
                                            <img src={item.image} alt={item.name} className="w-100 rounded" />
                                        </Col>
                                        <Col md={6}>
                                            <h5>{item.name}</h5>
                                            <p className="text-muted">Quantity: {item.quantity}</p>
                                            <p>{item.specialInstructions}</p>
                                        </Col>
                                        <Col md={3} className="text-end">
                                            <h5>₹{item.price * item.quantity}</h5>
                                            <Button 
                                                variant="outline-danger" 
                                                size="sm"
                                                onClick={() => {
                                                    const newItems = [...cartItems];
                                                    newItems.splice(index, 1);
                                                    setCartItems(newItems);
                                                }}
                                            >
                                                Remove
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        ))
                    )}
                </Col>
                <Col md={4}>
                    <Card className="bg-dark text-white">
                        <Card.Body>
                            <h4 className="mb-4">Order Summary</h4>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal:</span>
                                <span>₹{calculateTotal()}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Delivery Fee:</span>
                                <span>₹50</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                                <strong>Total:</strong>
                                <strong>₹{calculateTotal() + 50}</strong>
                            </div>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Delivery Address</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={deliveryAddress}
                                        onChange={(e) => setDeliveryAddress(e.target.value)}
                                        placeholder="Enter your delivery address"
                                        className="bg-dark text-white"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Payment Method</Form.Label>
                                    <Form.Select
                                        value={paymentMethod}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="bg-dark text-white"
                                    >
                                        <option value="cash">Cash on Delivery</option>
                                        <option value="card">Credit/Debit Card</option>
                                        <option value="upi">UPI</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button 
                                    variant="light" 
                                    className="w-100"
                                    onClick={handleCheckout}
                                    disabled={cartItems.length === 0 || !deliveryAddress}
                                >
                                    Place Order
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;
