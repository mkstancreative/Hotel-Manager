import React from 'react'
import Header from '../header/Header';
import Navbar from '../header/Navbar';
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
