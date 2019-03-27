import React, { Component } from 'react';
import Background from '../img/header.jpg';

const myStyles = {
    backgroundImage: `url(${Background})`,
    minHeight: '90vh',
    backgroundSize: 'cover',
    margin: '0 auto',
    textAlign: 'center',
    paddingTop: '300px',

}

const stylesText = {
    margin: '0',
    fontSize: '8em',
    color: '#0e76a8',
}

const stylesParagraf = {
    fontWeight: '700',
    color: '#0e76a8',
    fontSize: '2.75rem',


}

const stylesLink = {
    fontWeight: '700',
    textDecoration: 'none',
    boxShadow: '0 3px 3px 0 rgba(0,0,0,1)',
    backgroundColor: '#1d809f',
    borderColor: '#1d809f',
    color: 'white',
    padding: '1.25rem 2.5rem',
    borderRadius: '.25rem',
    display: 'inline-block',


}



class Header extends Component {
    render() {
        return (
            <div>
                <header style={myStyles}>
                    <h1 style={stylesText}>{this.props.text}</h1>

                    <p style={stylesParagraf}>Free tips for riders</p>

                    <a href="#button" style={stylesLink}>{this.props.button}</a>
                </header>

            </div>
        );
    }
}

export default Header;