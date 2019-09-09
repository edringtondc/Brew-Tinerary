import React, { Component } from 'react';
import NavBar from "../components/NavBar"
import API from "../utils/API"
import BreweryListItem from "../components/BreweryListItem"
import { Container } from 'reactstrap';
import styled from "styled-components";

const ListContainer = styled(Container)`
    border-style: solid 1px grey;
    height: 100%;
    margin: 0 0 6rem 0;
    width: 100%;
    overflow-y: scroll;
`;



class Saved extends Component {
    state = {
        savedBreweries: []

    }

    componentDidMount() {
        console.log("Mounted")
        this.loadSavedBreweries()

    }
    

    handleDelete = (_id) => {
        API.deleteBrewery(_id)
        .then(res => {
            console.log("deleted " , _id)
            this.loadSavedBreweries()
            
        })
        .catch(err => console.log("error", err));
    }



    loadSavedBreweries = () => {
        API.getAllSaved()
            .then(res => {


                console.log("res ", res.data)

                // const newSaved = this.state.savedBreweries.slice()

                // res.data.forEach(saved=>{
                //     newSaved.push(saved)
                // })
                // this.setState({savedBreweries: newSaved})

                this.setState({savedBreweries: res.data})
                

             

                console.log(this.state.savedBreweries)
            }
                //being returned an array - put that up in state -  from state - render 
                // this.setState({ breweries: res.data, name: "", status: "", city: "", state: "", address: "", date: "" })

            )
            .catch(err => console.log("error", err));
    }

    render() {
        return (
            <>
                <NavBar />

                <ListContainer  >
                    {this.state.savedBreweries.length ? (
                        <div >
                            {this.state.savedBreweries.map(brewery => (

                                <BreweryListItem
                                key={brewery._id}
                                name={brewery.name}
                                street={brewery.street}
                                state={brewery.state}
                                city={brewery.city}
                                url={brewery.url}
                                status={brewery.status}
                                handleDelete={()=>this.handleDelete(brewery._id)}
                                id={brewery.id}
                                _id={brewery._id}
                                saved={true}
                                >
                                </BreweryListItem>
                            ))}
                        </div>
                        //button with Link with to=...
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </ListContainer>
            </>
        )
    }

}

export default Saved

