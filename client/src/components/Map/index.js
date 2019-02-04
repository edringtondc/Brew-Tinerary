
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";


export class MapContainer extends Component {
  // constructor(props) {
  //   super(props);
    state= {
      selectedPlace: "Denver"
    }
  // }
  

  style = {
    width: "95%",
    height: 500,
  }


  onInfoWindowClose (){
    console.log(this.state.selectedPlace);
  }
  onMarkerClick (){
    console.log(this.state.selectedPlace);
  }
  render() {
    return (
      <Map google={this.props.google} 
        style={this.style}
        initialCenter={{
            lat: 39.7392,
            lng: -104.9903,
        }}
        zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={this.props.search} />
 
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
)) (MapContainer)

