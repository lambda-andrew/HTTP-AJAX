import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
width: 900px
display: flex
justify-content: center
flex-wrap: wrap`;

function FriendCard(props) {
    return(
        <CardDiv>
            {props.friends.map(friend => (
                <div className="friendCard" key={friend.id}>
                    <h4>Name: {friend.name}</h4>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button onClick={props.deleteFriend}>Delete Friend</button>
                </div>
            ))}
        </CardDiv>
    )
}

export default FriendCard