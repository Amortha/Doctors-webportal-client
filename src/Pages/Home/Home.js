import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Dental from './Dental';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppintment from './MakeAppintment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppintment></MakeAppintment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;