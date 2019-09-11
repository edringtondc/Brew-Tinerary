import React from 'react';
import styled from "styled-components";
import axios from "axios"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

// const Icon = styled.img`
//   width = 50px
//   height = 50px
//   margin: 10px
// `;

const StyledNav = styled(Navbar)`
  
`;


class NavBar extends React.Component {
  style = {
    color: "#f4be41"
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this)
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }


  render() {

    // const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <div>
        <StyledNav color="dark" light expand="md" >


          <NavbarBrand href="/" style={this.style}> 
            {/* <img className="mr-2" src="../../assets/RFclipart-63304.jpg" width="30" height="30" alt="" /> */}
          BrewTinerary</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" style={this.style}>Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/saved" style={this.style}>My Itineraries</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Login" style={this.style}>LogIn</NavLink>
              </NavItem>

      
            </Nav>
          </Collapse>
        </StyledNav>
      </div>
    );
  }
}

export default NavBar