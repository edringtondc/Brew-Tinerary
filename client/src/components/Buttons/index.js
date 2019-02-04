import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';




const SaveButton = (props) => {
    return (
        <Button outline color="warning" id={"save"} onClick={props.saveBreweries} >Save</Button>
    )
}

export default SaveButton

