import React from 'react';
import HotelRoomGalleryData from './HotelRoomGalleryData';
import { Container, Row } from 'react-bootstrap';
import "../styles/HotelRoomGallery.css";


const roomGallery = [
    {
        id : '0',
        room: 'img/room .jpg',
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '1',
        room: 'img/room 1.jpg',
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '2',
        room: 'img/room 2.jpg',
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '3',
        room: 'img/room4 .jpg',
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '4',
        room: 'img/room 9.jpg',
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '5',
        room: 'img/room 5.jpg',
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    }
]

const HotelRoomGallery = () => {


    return (
        <>
           <Container className='room-container'>
                <h4>HOTEL MASTER'S ROOMS</h4>
                <p>View All Rooms</p>
                <Row className='room-gallery'>
                {roomGallery.map((roomGallery, index) => {
                return <HotelRoomGalleryData key={index} roomGallery={roomGallery} />
                })}
               
                </Row>
            </Container> 

            
                
        </>
    )
}

export default HotelRoomGallery;
