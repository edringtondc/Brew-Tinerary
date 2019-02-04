import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';



class Checkbox extends Component {

    constructor (props) {
        super(props);
    
        this.state = { cSelected: [] };
    
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
      }
    
      onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
      }
    
      onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
          this.state.cSelected.push(selected);
        } else {
          this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
    }

  
    render() {
        return (
            <>
        
                <ButtonGroup>
                    <Button color="warning" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Save</Button>
                </ButtonGroup>
                {/* <p>Selected: {JSON.stringify(this.state.cSelected)}</p> */}
            </>
        )
    }
}

export default Checkbox


