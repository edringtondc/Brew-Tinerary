
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";

export class MapContainer extends Component {
  state= {
    selectedPlace: "Denver"
  }

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
      <Map google={this.props.google} style={this.style} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyA7UZmTHAMl9HcH5nUwa7kJixTYgwWKr4Q")
}) (MapContainer)

