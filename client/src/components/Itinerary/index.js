import React from 'react';
import initialData from "../../initial-data";
import Search from "../Search";
import SaveButton from "../Buttons"
import BreweryListItem from "../BreweryListItem"
import MapContainer from "../Map";
import { Col, Row, Container } from 'reactstrap';
// import { DragDropContext } from "react-beautiful-dnd";
import "@atlaskit/css-reset";
import styled from "styled-components";
import API from "../../utils/API.js"




const MainContent = styled.div`
    margin: 10px
    height 90%
`;

const ListContainer = styled(Container)`
    border-style: solid 1px grey;
    height: 350px
    margin: 0 auto;
    width: 350px;
    overflow-y: scroll;
`;



export default class Itinerary extends React.Component {

    state = {
        initialData,
        search: "",
        result: [" "],
        breweryList: [],
        savedList: [],
        locations: [],
        mapPins: [],
        searchLatLong: {},
        mapCenter: {
            lat: 39.7392,
            lng: -104.9903,
        },
    }

    componentDidUpdate(prevProps, prevState) {


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
                // console.log("Geo Code", res)
                const locations = res.data

                // console.log(res.data)
                this.setState({ locations: [...this.state.locations, locations.results[0]] }, () => {


                    const newLocations = this.state.locations.map(location => {
                        return location.geometry.location

                    })

                    this.setState({ mapPins: newLocations })

                })

            })
            .catch(err => console.log(err));
    };

    saveBreweries = () => {
        console.log("saveBreweries called")

        API.saveBreweries(this.state.savedList)
            .then(function (res) {
                console.log("Save Breweries.then")
                console.log(res)
            })

    }

    breweryOnly = () => {

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
        const { value } = event.target
        if (value !== "") {
            this.setState({
                search: value
            })
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        API.geoCode(this.state.search)
            .then(res => {
                console.log("Map geo", res)
                this.setState({ mapCenter: res.data.results[0].geometry.location })
            })

        console.log("submitted")
        console.log("state", this.state.result)
        this.searchBreweries(this.state.search);
    }


    handleSave = (id, url, name, status, street, city, state, ) => {
        console.log("Saved: " + id)


        var newStateArray = this.state.savedList.slice();

        newStateArray.push({
            id: id,
            name: name,
            url: url,
            status: status,
            street: street,
            city: city,
            state: state
        });

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
                    <MainContent>
                        <Row className="m-2 p-2">

                        <Search
                                    value={this.state.search}
                                    handleInputChange={this.handleInputChange}
                                    handleSubmit={this.handleSubmit}
                            
                                />
                        </Row>
                        <Row className="m-2 p-2">
                        <Col md={8}>
                                <MapContainer
                                    google={this.state.search}
                                    mapPins={this.state.mapPins}
                                    center={this.state.mapCenter}
                                />
                        </Col>
                            <Col md={4}>

                              <h4>Results: </h4>

                                <ListContainer >
                        
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
                                                    saved={false}
                                                >
                                                </BreweryListItem>
                                            ))}
                                        </div>
                                        //button with Link with to=...
                                    ) : (
                                            <h3>No Results to Display</h3>
                                        )}
                                  
                                </ListContainer>
                                <div className="d-flex justify-content-center"><SaveButton saveBreweries={this.saveBreweries} /></div>
                            </Col>
                        </Row>
                    </MainContent>

                </Container>

            </>
        );

    }
}



