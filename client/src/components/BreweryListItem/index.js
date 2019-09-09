import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import styled from "styled-components";

// const Link = styled.a`
//     color: #fb3f00;
//    text-decoration: none;`

const Name = styled.a`
    color: black;
    font-size: 18px;
    margin-right: 8px
`;

const Address = styled.span`
    margin-top: 0px;
    margin-left: 8px;
    margin-right: 8px
`;

const StyledCard = styled(Card)`
  box-shadow: 1px;
  margin: .4rem;
`;

const BreweryListItem = (props) => {
  return (
   
        <StyledCard body key={props.id} _id={props._id}>
          <CardTitle><Name href={"https://www." + props.url} target="_blank">{props.name}</Name> </CardTitle>
          <CardText> Type: {props.status}</CardText>
          
          <CardText><Address>{props.street}, {props.city}, {props.state}</Address></CardText>
         { !props.saved ? <Button className="mx-2 mt-1" color="warning" onClick={()=> props.handleSave(props.id, props.url, props.name, props.status, props.street, props.city, props.state)}>Select</Button>
              : <Button className="mx-2 mt-1" color="danger" onClick={()=> props.handleDelete(props._id)}>Delete</Button>
         } 
        </StyledCard>
      

  );
};

export default BreweryListItem;