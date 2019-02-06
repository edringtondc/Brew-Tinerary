import React from 'react';
import initialData from "../../initial-data";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Search from "../Search";
import SaveButton from "../Buttons"
import BreweryListItem from "../BreweryListItem"


import MapContainer from "../Map";

import { Col, Row, Container } from 'reactstrap';
// import { DragDropContext } from "react-beautiful-dnd";
import "@atlaskit/css-reset";
// import styled from "styled-components";
import API from "../../utils/API.js"





export default class Itinerary extends React.Component {

    state = {
        initialData,
        search: "",
        result: [" "],
        breweryList: [],
        savedList: [],
        locations: [],
        mapPins: [],
    }

    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):

        if (this.state.result !== prevState.result) {
            var addressArray = []
            for (let i = 0; i < this.state.result.length; i++) {
                var result = this.state.result[i]
                var address = `${result.street}, ${result.city}, ${result.state},`
                addressArray.push(address)


            }

            console.log(addressArray)
            for (let i = 0; i < addressArray.length; i++) {
                this.getGeoCode(addressArray[i])
            }

        }

        // console.log(prevProps)
        // console.log(prevState)
        // console.log("state " , this.state)
        // console.log("component updated")

    }

    getGeoCode = query => {

        // console.log("query: " + query)

        API.geoCode(query)
            .then(res => {
                console.log("Geo Code", res)
                const locations = res.data

                this.setState({ locations: locations }, () => {
                    // console.log("state: ", this.state.locations)

                    // console.log(this.state.locations.results[0].geometry.location)

                    const lat = Number(this.state.locations.results[0].geometry.location.lat)
                    const lng = Number(this.state.locations.results[0].geometry.location.lng)


                    this.makePins(lat, lng, "test")

                    // for (let i = 0; i < this.state.locations.length; i++) {
                    //     const lat = this.state.locations[i].results[0].geometry.location.lat
                    //     const lng = this.state.locations[i].results[0].geometry.location.lng
                    //     console.log("in for loop")
                    //     this.makePins(lat, lng)
                    // }

                })

            })
            .catch(err => console.log(err));
    };

    makePins = (lat, lng, name) => {
        console.log("lat " + lat)
        console.log("lng " + lng)





        // const newPin = {lat, lng, name}
        // const newMapPins = this.state.mapPins

        // newMapPins.push(newPin)
        // this.setState({mapPins: newMapPins})

    }

    saveBreweries = () => {
        console.log("saveBreweries called")

        API.saveBreweries(this.state.savedList)
            .then(function (res) {
                console.log("Save Breweries.then")
                console.log(res)
            })

    }

    breweryOnly = () => {

        // const status = this.state.result
        // console.log(status)

        const breweries = this.state.result.filter(locations => locations.status === "Brewery" || locations.status === "Brewpub").slice(0, 10)
        this.setState({ breweryList: breweries })

    }


    searchBreweries = query => {
        // alert("in searchBreweries")
        API.getBreweries(query)
            .then(res => {
                console.log("front end", res)

                this.setState({ result: res.data })

            }).then(res => {
                this.breweryOnly()
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit = event => {
        event.preventDefault();

        console.log("submitted")
        console.log("state", this.state.result)
        this.searchBreweries(this.state.search);

    }


    handleSave = (id) => {
        console.log("Saved: " + id)
        let savedID = id;
        var newStateArray = this.state.savedList.slice();

        newStateArray.push(savedID);

        this.setState({ savedList: newStateArray });
        //need to save other data

        API.getAllSaved()
            .then(data => console.log(data))
            .catch(err => console.log(err))


    }





    render() {
        return (

            <>
                <Container className="container m-2" >
                    <Row className="m-2 p-2">
                        <Col md={8}>
                            <MapContainer
                                google={this.state.search}
                            />
                        </Col>
                        <Col md={4}>

                            <Search
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleSubmit={this.handleSubmit}
                            />
                            <div className="d-flex justify-content-center"><SaveButton saveBreweries={this.saveBreweries} /></div>


                    

                                <Container >


                                    {this.state.result.length ? (
                                        <div >
                                            {this.state.breweryList.map(brewery => (

                                                <BreweryListItem
                                                    key={brewery.id}
                                                    name={brewery.name}
                                                    street={brewery.street}
                                                    state={brewery.state}
                                                    city={brewery.city}
                                                    url={brewery.url}
                                                    status={brewery.status}
                                                    handleSave={this.handleSave}
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

                        
                        </Col>

                    </Row>



                </Container>








                {/* <DragDropContext
                    onDragEnd={this.onDragEnd}
                    onDragStart={this.onDragStart}
                    onDragUpdate={this.onDragUpdate}
                >
                    <Container>

                        {this.state.initialData.columnOrder.map(columnId => {
                            const column = this.state.initialData.columns[columnId];
                            const tasks = column.taskIds.map(taskId => this.state.initialData.tasks[taskId]);

                            return <Column key={column.id} column={column} tasks={tasks} />
                        })}
                    </Container>
                </DragDropContext> */}
            </>
        );


    }
}



