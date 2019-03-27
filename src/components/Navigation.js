import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display:flex;
  justify-content: space-between;
  background-color:#33CCFF;
`;

const Title = styled.h2`
  font-size:20px;
  color: #0e76a8;
  cursor: pointer;
  padding-left:15px;

  &:hover{
    color: black;
}
`;

const List = styled.li`
list-style:none;
display:inline-block;
padding:10px;
font-size:18px;
`;

const myStyles = {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'white',
}


class Navigation extends Component {
    render() {
        const sections = ['Home', 'About', 'Equipment', 'Account', 'Map'];

        const navLinks = sections.map(section => {
            return (
                <List><a style={myStyles} href={'#' + section}>{section}</a></List>
            )
        })

        return (
            <Nav>
                <Title>Bike Project</Title>

                <ul>
                    {navLinks}
                </ul>
            </Nav>
        );
    }
}
export default Navigation;