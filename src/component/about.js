import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'; 

function About(){
    return(
        <div className='container mt-5' id="about">
            <div className='row'>
                <div className='col-md-6 py-5 pe-lg-5'>
                    <div className='position-relative'>
                        <img 
                            className='w-100 rounded' 
                            src='https://img.freepik.com/premium-photo/professional-young-chef-working-kitchen_849906-13767.jpg'
                            alt="Our Chef at work"
                        />
                        <img 
                            className='small-about rounded' 
                            src='https://img.freepik.com/free-photo/healthy-chinese-cabbage-salad-isolated-white-background_123827-20704.jpg'
                            alt="Fresh ingredients"
                        />
                    </div>
                </div>
                <div className='col-md-6 py-5 ps-lg-5 text-white'>
                    <h2>Our Story</h2>
                    <p>Welcome to our culinary haven, where passion meets flavor in every dish we serve. Since our establishment, we've been dedicated to creating memorable dining experiences that celebrate the art of fine cuisine.</p>
                    <p>Our expert chefs combine traditional cooking techniques with modern innovation, using only the freshest, locally-sourced ingredients to craft dishes that delight both the palate and the soul. Each recipe tells a story of culinary excellence and dedication to quality.</p>
                    <p>At our restaurant, we believe that dining is more than just eating – it's an experience that brings people together. Our warm, inviting atmosphere and attentive service ensure that every visit is special, whether you're celebrating a milestone or simply enjoying a casual meal with loved ones.</p>
                    <Button variant="outline-light" className="mt-3" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
                        Explore Our Menu
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default About;