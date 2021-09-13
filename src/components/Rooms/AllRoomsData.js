import React from 'react';
import { Col, Card } from 'react-bootstrap';



const AllRoomsData = (props) => {

    const rooms = props.rooms;
    return (
        <>
                    <Col md={6} className="all-rooms-col">
                        <img className="rooms-img"  src={rooms.roomType} alt={rooms.roomAlt} />
                        <Card className="room-details">
                            <Card.Header className="rooms-name-header">{rooms.roomName}</Card.Header>
                            <Card.Body>{rooms.roomDescrip} </Card.Body>
                            <button className="room-btn">{rooms.roomBook}</button>
                        </Card>
                    </Col>
            
       
            
        </>
    )
}

export default AllRoomsData
