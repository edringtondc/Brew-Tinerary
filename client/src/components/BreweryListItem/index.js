import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const BreweryListItem = (props) => {
  return (
   
        <Card body key={props.key}>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.street}</CardText>
          <CardText>{props.street}</CardText>
          <CardText>{props.city} {props.state}</CardText>
          <Button color="warning" href={props.url} >Brewery Website</Button>
        </Card>
      

  );
};

export default BreweryListItem;