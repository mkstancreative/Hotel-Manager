import React from 'react';
import { Card} from 'react-bootstrap';



const HotelRoomGalleryData = (props) => {

    const roomGallery = props.roomGallery
    return (
        <>
                <Card style={{width: "20rem"}}>
                <img src={roomGallery.room} alt={roomGallery.alt} />
                <Card.Body className='room-details'>
                    <Card.Text className="roomText">{roomGallery.roomName}</Card.Text>
                    <button className='check-more'> {roomGallery.roomBtn}</button>
                </Card.Body>
            </Card>
            
        </>
    )
}

export default HotelRoomGalleryData;
