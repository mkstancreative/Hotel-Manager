import React from 'react'
import {Container, Carousel } from 'react-bootstrap'
import room1 from '../../assets/img/room 1.jpg'
import room2 from '../../assets/img/room 2.jpg'
import room3 from '../../assets/img/room 5.jpg';
import "../styles/Header.css"

const Header = () => {
    return (
        <>
        <Container className="p-0 slide header" fluid >
            
                <Carousel fade>
                    <Carousel.Item className='carousel__item'>
                        <img className="images" src={room1} alt='' />
                         <Carousel.Caption className='carousel__cap'>
                        <h4> WELCOME TO</h4>
                        <h3> <strong>HOTEL MASTER</strong></h3>
                        
                        <p> Good Resorts & Hosipitality</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='carousel__item'>
                        <img className="d-block w-100" src={room2} alt='' />
                         <Carousel.Caption className='carousel__cap'>
                        <h4> WELCOME TO</h4>
                        <h3> <strong>HOTEL MASTER</strong></h3>
                        <p> Good Resorts & Hosipitality</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='carousel__item'>
                        <img className="d-block w-100" src={room3} alt='' />
                         <Carousel.Caption className='carousel__cap'>
                        <h4> WELCOME TO</h4>
                        <h3> <strong>HOTEL MASTER</strong></h3>
                        <p> Good Resorts & Hosipitality</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container> 

            
        </>
    )
}

export default Header;
