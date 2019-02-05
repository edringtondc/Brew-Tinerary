import React from 'react';
import Itinerary from "../components/Itinerary"
// import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import styled from "styled-components";



// import CarouselPics from "../components/Carousel"



const Wrapper = styled.div`
    height: 100%
    margin: 10px
    
   
`;

const Main = () => {

    
    return (
        <>
        <NavBar/>
     {/* <CarouselPics/> */}

        <Wrapper>
       
            <Itinerary/>
        
        </Wrapper>
        {/* <Footer/> */}
       
   
        </>
    )
}

export default Main;

