import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'; 



function Offer(){
    return(
        <>
        <section>
            <div className='container mt-5'>
                <div className='row  p-5'>
                    <div className='col-md-6 text-white'>
                        <h4 className='mb-5'>
                            Unlimited Food on Tuesday
                        </h4>
                        <span className='fs-1'>
                            Only  ₹ 199 /- 
                        </span>
                    </div>
                    <div className='col-md-6 position-relative'>
                        <img src='https://constantstateofhunger.files.wordpress.com/2015/08/200-7.gif' />
                        <img src='./ddd.png' className='ddd' />
                    </div>
                </div>
                <video autoPlay loop muted playsInline width="100%" className="videoPlayer" src="/video.mp4"></video>


            </div>
        </section>
        </>
    );
}
export default Offer;