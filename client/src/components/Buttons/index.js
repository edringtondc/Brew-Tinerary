import React from 'react';
import { Button } from 'reactstrap';




const SaveButton = (props) => {
    return (
        <Button 
            color="warning" 
            className="m-2"  
            id={"save"+props.id} 
            name={props.name} 
            url={props.url} 
            city={props.city}
            state={props.state}
            address={props.address}
            status={props.status}
            onClick={props.saveBreweries}>Click here to save selections</Button>
    )
}

export default SaveButton

