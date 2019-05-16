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

const DeleteButton=styled.button`
width: 90px;
height: 30px;
margin: 5px;
border-radius: 5px;
font-size: 15px;
font-weight: bold;
color: white;
background-color:  #3b5998;
font-family: 'Quicksand', sans-serif;
:hover {
  background-color: white;
  color:#3b5998 ;
}
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
                <DeleteButton onClick={(event) => this.props.deleteFriend(event, this.props.id)}> Delete</DeleteButton>
            </FriendDiv>

        )
    }
}