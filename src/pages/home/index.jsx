import React from 'react';
import './style.scss';
import Marquee from '../../components/marquee';
import Header from '../../components/header';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Marquee text="site.com"/>
        </div>
    );
};

export default Home;