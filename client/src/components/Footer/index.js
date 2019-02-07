import React from "react"
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
                    <span className="text-muted">Brought to you by Elisabeth Edrington and Tiffiany Cuneo</span>
                </div>
            </FooterDiv>
        </>
    )

}

export default Footer

 //axios - hit back end ajax, store in state - in .then



