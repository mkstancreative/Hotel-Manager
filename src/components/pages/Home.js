import React from 'react'
import Header from '../header/Header';
import CheckAvaliability from '../home/CheckAvaliability';
import HotelRoomGallery from '../home/HotelRoomGallery';

const Home = () => {
    return (
        <>
            <Header />
            <HotelRoomGallery />
            <CheckAvaliability />
            
        </>
    )
}

export default Home;
