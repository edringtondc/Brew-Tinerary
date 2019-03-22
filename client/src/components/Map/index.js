import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from "react";
// import Pin from "./marker"
// import API from "../../utils/API.js"


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

      selectedPlace: "Denver",
   
      showingInfoWindow: false,
      activeMarker: {},

    }
  }


  style = {
    width: "95%",
    height: 450,
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // Typical usage (don't forget to compare props):

  //   if (prevProps.search !== this.props.search) {

  //     this.setState({ selectedPlace: this.props.search }, () => {

  //       API.geoCode(this.props.search)
  //         .then(res => {
  //           console.log("Map geo", res)
  //           this.setState({ searchLatLng: res.data.results[0].geometry.location })

  //         })



  //     })
  //   }


  // }

 

  onMarkerClick = (props, marker, e) =>
    this.setState({

      activeMarker: marker,
      showingInfoWindow: true,

    });

  componentDidMount() {

    console.log(this.state);
  }

  onInfoWindowClose() {
    console.log(this.state.selectedPlace);
  }

  // 

  render() {
    return (

      <Map id="map" google={this.props.google}

        style={this.style}
        initialCenter={{
          lat: 39.7392,
          lng: -104.9903,
        }}
        center={this.props.center}
        zoom={14}

      >
        {this.props.mapPins.map(pin => {
          return <Marker
          
            onClick={this.onMarkerClick}
            position={pin}
          />
        })}

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: ("AIzaSyA7UZmTHAMl9HcH5nUwa7kJixTYgwWKr4Q")
  }
  ))(MapContainer)

