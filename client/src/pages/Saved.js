import React, { Component } from 'react';
import NavBar from "../components/NavBar"
import API from "../utils/API"
import BreweryListItem from "../components/BreweryListItem"
import { Col, Row, Container } from 'reactstrap';
// import styled from "styled-components";



class Saved extends Component {
    state = {
        savedBreweries: []

    }

    componentDidMount() {
        console.log("Mounted")
        this.loadSavedBreweries()

    }



    loadSavedBreweries = () => {
        API.getAllSaved()
            .then(res => {
                console.log("res ", res.data)

                const newSaved = this.state.savedBreweries.slice()
                res.data.forEach(saved=>{
                    newSaved.push(saved)
                })
                

                this.setState({savedBreweries: newSaved})

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

                <Container >
                    {this.state.savedBreweries.length ? (
                        <div >
                            {this.state.savedBreweries.map(brewery => (

                                <BreweryListItem
                                key={brewery.id}
                                name={brewery.name}
                                street={"Street"}
                                state={"state"}
                                city={"city"}
                                url={brewery.url}
                                status={"status"}
                                handleSave={"handleSave"}
                                id={brewery.id}
                                >
                                </BreweryListItem>
                            ))}
                        </div>
                        //button with Link with to=...
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Container>
            </>
        )
    }

}

export default Saved

