import React from 'react';
import { Button } from 'reactstrap';




const SaveButton = (props) => {
    return (
        <Button color="warning" className="m-2"  id={"save"} onClick={props.saveBreweries}>Click here to save selections</Button>
    )
}

export default SaveButton

