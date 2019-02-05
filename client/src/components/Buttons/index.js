import React from 'react';
import { Button } from 'reactstrap';




const SaveButton = (props) => {
    return (
        <Button outline color="warning" id={"save"} onClick={props.saveBreweries} >Save</Button>
    )
}

export default SaveButton

