import React from 'react';
import Header from '../components/Header'
import About from '../components/landing/About';
import Footer from '../components/Footer';
import Carousel from '../components/landing/Carousel';
import Register from '../components/landing/Register';
import Login from '../components/landing/Login';
import Alert from '../components/forms/Alert'

const Landing = () => (
        <div className="landing__container">
            <Carousel />
            <About />
            <Alert />
            <Register />
            <Login />
        </div>
    )

export default Landing;