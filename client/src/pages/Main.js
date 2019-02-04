import React from 'react';
import Itinerary from "../components/Itinerary"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import styled from "styled-components";
import MapContainer from "../components/Map"
import { Col, Row, Container } from 'reactstrap';
import CarouselPics from "../components/Carousel"



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
        <Container>
           <Row>
            <Col md={8}>
            <MapContainer/>
            </Col>
            <Col md={4}>
            <Itinerary/>
            </Col>

           </Row>
       
           <Footer/>
            
        </Container>
        </Wrapper>
       
   
        </>
    )
}

export default Main;

