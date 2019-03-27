import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const myServices = {
    backgroundColor: '#1d809f',
    textAlign: 'center',
}

const myServicesH3 = {
    fontSize: '16px',
    textTransform: 'uppercase',
    color: 'rgb(236,184,7)',
    marginTop: '60px',
    padding: '30px',
}

const myServicesH2 = {
    fontSize: '48px',
    color: 'white',
    marginBottom: '48px',
    marginTop: '0',
}

const mymaps = {
    height: '100%',
}


class Word extends Component {
    render() {
        return (
            <div style={myServices}>
                <p style={myServicesH3}>Live & Taste</p>
                <p style={myServicesH2}>Welcome to us</p>
                <Map style={mymaps} google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
                </Map>

            </div >
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyAyEwdRJfhWDpjSgThinOYBq4-TRGLi4tI')
})(Word)