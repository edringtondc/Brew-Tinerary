import React from 'react';
import Itinerary from "../components/Itinerary"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Styled from "styled-components";




import CarouselPics from "../components/Carousel"

 // background-image: url("./assets/beerbubbles.jpg");

const Wrapper = Styled.div`
    height: 800px;
    width: 100%;
    background-color: whitesmoke;

  
`;

const Main = () => {

    
    return (
        <>
        <NavBar/>

   <CarouselPics></CarouselPics>
        <Wrapper>
       
       
            <Itinerary/>
        
        </Wrapper>
  
       
   
        </>
    )
}

export default Main;

