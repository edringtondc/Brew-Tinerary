
import {Marker} from 'google-maps-react';
import React from "react";


const Pin = (props) => {
    return (
        <>
            <Marker
                name={props.name}
                position={{ lat: Number(props.lat), lng: Number(props.lng) }} />
            <Marker />
        </>
                )
                }

export default Pin