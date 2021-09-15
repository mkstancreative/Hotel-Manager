import React from 'react';
import { Container, Row } from 'react-bootstrap';
import room1 from "../../assets/img/room .jpg";
import room2 from "../../assets/img/room 2.jpg";
import room3 from "../../assets/img/room 5.jpg";
import room4 from "../../assets/img/room 6.jpg";
import AllRoomsData from '../Rooms/AllRoomsData';
import '../styles/AllRooms.css'



const rooms = [
    {
        id: "0",
        roomType : room1,
        roomAlt : "hotel rooms 1",
        roomName : "Single Room",
        roomDescrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos dolorem temporibus necessitatibus consectetur laborum 
                        iusto modi quam inventore autem! Non alias explicabo`,
        roomBook : 'Book Now',                
    },
    {
        id: "1",
        roomType : room2,
        roomAlt : "hotel rooms 2",
        roomName : "Deluxe Room",
        roomDescrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos dolorem temporibus necessitatibus consectetur laborum 
                        iusto modi quam inventore autem! Non alias explicabo`,
        roomBook : 'Book Now',                
    },
    {
        id: "2",
        roomType : room3,
        roomAlt : "hotel rooms 3",
        roomName : "Luxury Room",
        roomDescrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos dolorem temporibus necessitatibus consectetur laborum 
                        iusto modi quam inventore autem! Non alias explicabo`,
        roomBook : 'Book Now',

    },
    {
        id: "3",
        roomType : room4,
        roomAlt : "hotel rooms 4",
        roomName : "Double Room",
        roomDescrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos dolorem temporibus necessitatibus consectetur laborum 
                        iusto modi quam inventore autem! Non alias explicabo`,
        roomBook : 'Book Now'                
    },
    {
        id: "4",
        roomType : room1,
        roomAlt : "hotel rooms 1",
        roomName : "Single Room",
        roomDescrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos dolorem temporibus necessitatibus consectetur laborum 
                        iusto modi quam inventore autem! Non alias explicabo`,
        roomBook : 'Book Now',                
    },
    {
        id: "5",
        roomType : room3,
        roomAlt : "hotel rooms 3",
        roomName : "Luxury Room",
        roomDescrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos dolorem temporibus necessitatibus consectetur laborum 
                        iusto modi quam inventore autem! Non alias explicabo`,
        roomBook : 'Book Now',

    },
        {
        id: "6",
        roomType : room4,
        roomAlt : "hotel rooms 4",
        roomName : "Double Room",
        roomDescrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos dolorem temporibus necessitatibus consectetur laborum 
                        iusto modi quam inventore autem! Non alias explicabo`,
        roomBook : 'Book Now'                
    },
        {
        id: "7",
        roomType : room1,
        roomAlt : "hotel rooms 1",
        roomName : "Single Room",
        roomDescrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos dolorem temporibus necessitatibus consectetur laborum 
                        iusto modi quam inventore autem! Non alias explicabo`,
        roomBook : 'Book Now',                
    }
]



const AllRooms = () => {
    return (
        <>
            <Container className="all-rooms-container">
                <Row>
                    {rooms.map((rooms, index) =>  <AllRoomsData key={index} rooms={rooms} /> )}
                </Row>
                
            </Container>
            
            
        </>
    )
}

export default AllRooms;
