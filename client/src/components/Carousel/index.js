import React from 'react';
import Carousel from 'react-image-carousel';
import Styled from "styled-components"

import "./style.css";

let images = [
    './assets/chicago_cityscape.png',
    './assets/cityscape1.jpg',
    './assets/denver_cityscape.jpg',
    './assets/den-skyline.jpg',
    './assets/denver_skyline_sunrise.jpg',

];

const Background = Styled.div`
    background-image: url('./assets/denver_cityscape.jpg');
    height: 400px;
    padding: 3rem;
    
  
`;
const Info = Styled.div`
    color: yellow;
    font-size: 20px; 

`;


const CarouselPics = () => {

    return (
        <Background>
            <Info>
            
            <h1>Welcome to BrewTinerary</h1>
            <p>Search the city in which you would like to check out breweries, then select breweries from the results list.
            </p>
            <p>Once you've selected breweries, you can see them under the saved tabbed.</p>
            </Info>
        </Background>
    )
}


// const CarouselPics = () => (
//     <div className="myCarousel">
//         <Carousel images={images}
//             thumb={true}
//             loop={false}
//             autoplay={3000} />
//     </div>
// )

export default CarouselPics;