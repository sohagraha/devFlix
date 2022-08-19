import "./home.scss";
import React from 'react';
import Navbar from "../navbar/Navbar";
import Featured from "../featured/Featured";

const Home = () => {
    return (
        <div className='home'>
            <Featured type="series" />
            <Navbar />
        </div>
    );
};

export default Home;