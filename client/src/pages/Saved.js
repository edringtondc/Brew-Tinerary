import React, {Component } from 'react';
import NavBar from "../components/NavBar"
import API from "../utils/API"
// import styled from "styled-components";



class Saved extends Component {
    state = {
        
    }

    componentDidMount(){
        console.log("Mounted")
        this.loadSavedBreweries()

    }



    loadSavedBreweries = () => {
        API.getAllSaved()
            .then(res =>
                //being returned an array - put that up in state -  from state - render 
                // this.setState({ breweries: res.data, name: "", status: "", city: "", state: "", address: "", date: "" })
                console.log("res " ,res.data)

                )
            .catch(err => console.log("error" , err));
    }

    render() {
        return (
            <>
                <NavBar />

                <div>Saved Items</div>
            </>
        )
    }

}

export default Saved