import "./home.scss";
import React from 'react';
import Navbar from "../navbar/Navbar";
import Featured from "../featured/Featured";
import List from "../list/List";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured type="series" />
            <List />
            <List />
        </div>
    );
};

export default Home;