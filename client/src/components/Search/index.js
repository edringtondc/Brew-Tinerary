import React from "react";
import styled from "styled-components"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



const Search = (props) => {
  
    return (

      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="city" className="mr-sm-2">Location</Label>
          <Input type="text" placeholder="Search..." name="search" value={props.search} onChange={props.handleInputChange} />
        </FormGroup>
        <Button type="submit" onClick={props.handleSubmit}>Search</Button>
      </Form>
    
    );
  
}

// const Button = styled.button`
 
//   background: ${props => props.primary ? "#EFCA38" : "white"};
//   color: ${props => props.primary ? "white" : "#EFCA38"};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #EFCA38;
//   border-radius: 3px;
// `;


// function Search(props) {
//     return (

//         <div className="text-center">
//             <form >
//         <input type="text" placeholder="Search..." name="search" value={props.search} onChange={props.handleInputChange}
//           />
//         <Button type="submit" onClick={props.handleSubmit}>Submit</Button>
//        </form>
//       </div>

//     );
//   }

  export default Search