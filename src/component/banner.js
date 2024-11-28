import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Offer from './offer'; // Ensure the path is correct


function Banner() {
    const cards = [
        {
            title: "Signature Burgers",
            description: "Handcrafted with premium ingredients",
            img: "https://img.freepik.com/free-photo/delicious-big-burger-with-meat-bread-lettuce-tomatoes-generative-ai_169016-28840.jpg",
            alt: "Signature Burgers",
        },
        {
            title: "Chef's Specials",
            description: "Daily curated menu by our expert chefs",
            img: "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg",
            alt: "Chef's Specials",
        },
        {
            title: "Breakfast Delights",
            description: "Start your day with our breakfast specials",
            img: "https://www.miamiherald.com/latest-news/6bcl5c/picture242910706/alternates/LANDSCAPE_768/banana-pancakes-2.jpg",
            alt: "Breakfast Delights",
        },
    ];

    const carouselItems = [
        {
            heading: "Taste Extraordinary",
            description: "Experience authentic flavors and dining",
            className: "banner",
        },
        {
            heading: "Special Offers",
            description: "Discover our chef's special dishes",
            className: "banner second-banner",
        },
    ];

    return (
        <>
            {/* Carousel Section */}
            <Carousel>
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index} interval={index === 0 ? 8000 : 5000}>
                        <section className={item.className}>
                            <div className="p-5 text-white content">
                                <div className="banner-heading">
                                    <h1>{item.heading}</h1>
                                    <p className="lead">{item.description}</p>
                                </div>
                            </div>
                        </section>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Services Section */}
            <section className="container mt-4">
                <Row className="g-4 service">
                    {cards.map((card, index) => (
                        <Col key={index} md={4}>
                            <div className="card p-4 bg-dark text-white h-100">
                                <img
                                    src={card.img}
                                    className="rounded"
                                    alt={card.alt}
                                    loading="lazy"
                                />
                                <div className="card-body text-center mt-3">
                                    <h4>{card.title}</h4>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Offer Component */}
            <Offer />

            {/* Video Section */}
            {/* <section className="video-section py-5">
                <Container>
                    <h2 className="text-center text-white mb-5">Our Restaurant Atmosphere</h2>
                    <Row className="g-4">
                        <Col md={6}>
                            <div className="video-container">
                                <video
                                    controls
                                    className="w-100 rounded shadow"
                                    poster="/images/restaurant-poster.jpg"
                                >
                                    <source src="/videos/restaurant-ambience.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h3 className="text-white mt-3">Restaurant Ambience</h3>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="video-container">
                                <video
                                    controls
                                    className="w-100 rounded shadow"
                                    poster="/images/cooking-poster.jpg"
                                >
                                    <source src="/videos/cooking-process.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h3 className="text-white mt-3">Our Cooking Process</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
        </>
    );
}

export default Banner;
