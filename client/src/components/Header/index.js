import React from "react"
import './style.css';
import styled from "styled-components";

const NavBar = styled.nav`
    background-color: #EFCA38;
    height: 100px;
    text-align: center;
`;
const Link = styled.nav`
    color: #6A675B
`;

function Header() {
  
        return (

            <>
                <NavBar>
                    <Link>Home</Link>

                    Welcome to BrewTinerary
                    
                </NavBar>
            </>
        )
    
}

 export default Header

 //axios - hit back end ajax, store in state - in .then