import React, { Component } from 'react';

const myServices = {
    backgroundColor: '#1d809f',
    paddingBottom: '120px',
    textAlign: 'center',
}

const myServicesH3 = {
    fontSize: '16px',
    textTransform: 'uppercase',
    color: 'rgb(236,184,7)',
    margin: '0',
    padding: '30px',
}

const myServicesH2 = {
    fontSize: '48px',
    color: 'white',
    marginBottom: '48px',
    marginTop: '0',
}

const myRow = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
}

const mySpan = {
    backgroundColor: 'white',
    width: '112px',
    height: '112px',
    display: 'inline-block',
    borderRadius: '50%',
    color: '#1d809f',
    fontSize: '36px',
    lineHeight: '120px',
}

const myParagraf = {
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '6px',
    boxShadow: 'inset 0px 0px 51px -1px rgba(17,177,235,1)',
}

const myTitle = {
    fontSize: '22px',
}

class Services extends Component {
    render() {
        return (
            <div style={myServices}>
                <p style={myServicesH3}>Live & Taste</p>
                <p style={myServicesH2}>What We Do</p>
                <div style={myRow}>
                    <div>
                        <span style={mySpan}><i class="fas fa-bicycle"></i></span>
                        <h4 style={myTitle}>Advise</h4>
                        <p style={myParagraf}>We will help you in choosing good equipment, nice !</p>
                    </div>
                    <div>
                        <span style={mySpan}><i class="fas fa-mountain"></i></span>
                        <h4 style={myTitle}>Mountains</h4>
                        <p style={myParagraf}>Organize weekend trips to the mountains</p>
                    </div>
                    <div>
                        <span style={mySpan}><i class="fas fa-globe-europe"></i></span>
                        <h4 style={myTitle}>World</h4>
                        <p style={myParagraf}>The whole world is ours home. See ya on the spot</p>
                    </div>
                    <div>
                        <span style={mySpan}><i class="fas fa-store-alt"></i></span>
                        <h4 style={myTitle}>Shop</h4>
                        <p style={myParagraf}>See our products. New equipment for everyone</p>
                    </div>
                </div>
            </div >
        );
    }
}
export default Services;