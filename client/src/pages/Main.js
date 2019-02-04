import React from 'react';
import Itinerary from "../components/Itinerary"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import styled from "styled-components";
import MapContainer from "../components/Map"
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CarouselPics from "../components/Carousel"



const Container = styled.div`
    display: flex
    width: 90%
    flex-direction: column
    justify-content: center
   
`;

const Main = () => {

    
    return (
        <>
        <NavBar/>
     <CarouselPics/>
        
        <Container>
           <Row>
            <Col md={8}>
            <MapContainer/>
            </Col>
            <Col md={4}>
            <Itinerary/>
            </Col>

           </Row>
       
          
            
        </Container>
   
        </>
    )
}

export default Main;

