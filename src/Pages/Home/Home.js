import React from 'react';
import Banner from './Banner';
import Dental from './Dental';
import Info from './Info';
import MakeAppintment from './MakeAppintment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppintment></MakeAppintment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;