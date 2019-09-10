import React from "react"
import { Row, } from 'reactstrap';
import styled from "styled-components";

const FooterDiv = styled.div`
    position: fixed
    bottom: 0
    height: 50px
    width: 100%
`;

const FooterLink = styled.a`
    text-decoration: none;
    color: #fff;
`;

function Footer() {

    return (

        <>
            <FooterDiv className="footer bg-dark mt-3">
                <div className="container">
                    <Row className="d-flex justify-content-center">
                        <span className="text-muted">Brought to you by <FooterLink href="https://www.elisabethedrington.com" rel="noopener noreferrer" target="_blank">Elisabeth Edrington</FooterLink> </span>
                    </Row>
                    <Row className="d-flex justify-content-center">
                    <span className="text-muted">Check it out on <FooterLink href="https://github.com/edringtondc/Brew-Tinerary">GitHub</FooterLink></span>
                    </Row>     
                    </div>
            </FooterDiv>
        </>
    )

}

export default Footer

 //axios - hit back end ajax, store in state - in .then



