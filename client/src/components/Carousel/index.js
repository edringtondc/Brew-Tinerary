import React from 'react';
import Carousel from 'react-image-carousel';
import "./style.css";

let images = [
    './assets/chicago_cityscape.png',
    './assets/cityscape1.jpg',
    './assets/denver_cityscape.jpg',
    './assets/den-skyline.jpg',
    './assets/denver_skyline_sunrise.jpg',
    
];



const CarouselPics = () => (
    <div className="myCarousel">
        <Carousel images={images}
            thumb={true}
            loop={false}
            autoplay={3000} />
    </div>
)

export default CarouselPics;