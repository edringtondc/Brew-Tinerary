import React from 'react';
import Styled from "styled-components"
import "./style.css";



const Background = Styled.div`
    background-image: url('./assets/denver_cityscape.jpg');
    height: 400px;
    padding: 3rem;
    position: relative;
    z-index: 1;
    opacity: 0.7;
    
  
`;
const Info = Styled.div`
    color: black;
    font-size: 20px; 
    position: absolute;
    top: 5rem;
    left: 2rem;
    z-index: 100;

`;


const CarouselPics = () => {

    return (
        <>
        <Background>

        </Background>
        <Info className="animate fadeInRight">
      

            <h1>Welcome to BrewTinerary</h1>
            <p>Search the city in which you would like to check out breweries, then select breweries from the results list.
          </p>
            <p>Once you've selected breweries, you can see them under the saved tab.</p>
          
        </Info>
        </>
    )
}


export default CarouselPics;