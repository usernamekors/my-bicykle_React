import React, { Component } from 'react';
import Slider from "react-slick";
import Bicycle from '../img/bicycle.jpg';
import Cycling from '../img/cycling-forest.jpg';
import Bike from '../img/mountain-bike.jpg';
import Biking from '../img/mountain-biking.jpg';
import Snow from '../img/snow-bike.jpg';

const myServices = {
    backgroundColor: '#1d809f',
    textAlign: 'center',
    margin: '0 auto',
    width: '50%',
}

const myServicesH3 = {
    fontSize: '16px',
    textTransform: 'uppercase',
    color: 'rgb(236,184,7)',
    margin: '0',
    padding: '30px',
}

const myServicesH2 = {
    fontSize: '48px',
    color: 'white',
    marginBottom: '48px',
    marginTop: '0',
}

class Equipment extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div style={myServices}>
                <p style={myServicesH3}>Logic equipment of bicykl</p>
                <p style={myServicesH2}>Equipment</p>
                <Slider {...settings}>
                    <div>
                        <h3><img src={Bicycle} alt='Bike' /></h3>
                    </div>
                    <div>
                        <h3><img src={Cycling} alt='Bike' /></h3>
                    </div>
                    <div>
                        <h3><img src={Bike} alt='Bike' /></h3>
                    </div>
                    <div>
                        <h3><img src={Bicycle} alt='Bike' /></h3>
                    </div>
                    <div>
                        <h3><img src={Biking} alt='Bike' /></h3>
                    </div>
                    <div>
                        <h3><img src={Snow} alt='Bike' /></h3>
                    </div>
                </Slider>
            </div >
        );
    }
}
export default Equipment;