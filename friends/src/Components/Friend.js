import React from 'react';
import styled from 'styled-components';

const FriendDiv = styled.div`
width: 400px;
border: solid 1px lightgrey;
margin: 25px ;
padding: 10px;
border-radius: 10px;
font-size: 18px;
text-align: center;
`;

const Span = styled.span`
color: #3b5998;
font-weight: bold;
`;


export default class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FriendDiv>
                <p>No: <Span>{this.props.id}</Span></p>
                <p>Name: <Span>{this.props.name}</Span></p>
                <p>Age: <Span>{this.props.age}</Span></p>
                <p>Email: <Span>{this.props.email}</Span></p>
            </FriendDiv>

        )
    }
}