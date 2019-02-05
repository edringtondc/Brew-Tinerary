import { React, Component } from 'react';
import NavBar from "../components/NavBar"
import API from "../utils/API"
// import styled from "styled-components";



class Saved extends Component {


    // componentDidMount(){
    //     this.loadSavedBreweries()

    // }



    loadSavedBreweries = () => {
        API.getBreweries()
            .then(res =>
                this.setState({ breweries: res.data, name: "", status: "", city: "", state: "", address: "", date: "" })
            )
            .catch(err => console.log(err));
    };

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