import React from 'react';
import Banner from './banner';
import Discover from './discover';
import Product from './miniProducts';
import Vision from './vision';
import Coffee from './coffee';
import Testimonials from './testimonials';
import Footer from './footer';

export default function  Home(){
    return(
        <div>
            <Banner />
            <Discover />
            <Product />
            <Vision />
            <Coffee />
            <Testimonials />
            <Footer />
        </div>
    )
}

