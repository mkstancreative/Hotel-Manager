import React from 'react';
import HotelRoomGalleryData from './HotelRoomGalleryData';
import room12 from "../../assets/img/room .jpg";
import room13 from "../../assets/img/room 2.jpg";
import room14 from "../../assets/img/room 5.jpg";
import room15 from "../../assets/img/room 6.jpg";
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../styles/HotelRoomGallery.css";


const roomGallery = [
    {
        id : '0',
        room: room12,
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '1',
        room: room13,
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '2',
        room: room15,
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '3',
        room: room13,
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '4',
        room: room12,
        alt: "the-rooms",
        roomName : 'DELUXE ROOM - ONE KING BED',
        roomBtn : 'Check Details --',
    },
    {
        id : '5',
        room: room14,
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
                <Link to="/rooms" className="view-next"> View All Rooms</Link>
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
