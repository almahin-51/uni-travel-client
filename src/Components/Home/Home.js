import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Offers from '../Offers/Offers';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tours></Tours>
            <Offers></Offers>
            <Gallery></Gallery>
        </>
    );
};

export default Home;