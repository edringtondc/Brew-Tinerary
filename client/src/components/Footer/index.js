import React from "react"
import { Col, Row, } from 'reactstrap';
import styled from "styled-components";

const FooterDiv = styled.div`
    position: fixed
    bottom: 0
    height: 50px
    width: 100%
`;

function Footer() {

    return (

        <>
            <FooterDiv className="footer bg-dark mt-3">
                <div className="container">
                    <Row className="d-flex justify-content-center">
                        <span className="text-muted">Brought to you by <a href="https://www.elisabethedrington.com" target="_blank">Elisabeth Edrington</a> and Tiffiany Cuneo</span>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <a href="">GitHub Repository</a>
                    </Row>     
                    </div>
            </FooterDiv>
        </>
    )

}

export default Footer

 //axios - hit back end ajax, store in state - in .then



