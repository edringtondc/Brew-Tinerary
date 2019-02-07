import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import styled from "styled-components";

// const Link = styled.a`
//     color: #fb3f00;
//    text-decoration: none;`

const Name = styled.span`
    color: black;
    font-size: 18px;
    margin-right: 8px
`;

const Address = styled.span`
    margin-top: 0px;
    margin-left: 8px;
    margin-right: 8px
`;

const BreweryListItem = (props) => {
  return (
   
        <Card body key={props.id}>
          <CardTitle><Name>{props.name}</Name> <Button className="mx-1" color="warning" onClick={()=> props.handleSave(props.id, props.url, props.name, props.status, props.street, props.city, props.state)}>Select</Button></CardTitle>
          <CardText>{props.status}</CardText>
          <CardText><Address>{props.street}</Address></CardText>
          <CardText><Address>{props.city} {props.state}</Address></CardText>
          <Button color="warning" className="mt-2" href={"https://www." + props.url} target="_blank">Brewery Website</Button> 
        </Card>
      

  );
};

export default BreweryListItem;