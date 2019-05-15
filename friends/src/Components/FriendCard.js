import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
width: 500px
display: flex
flex-wrap: wrap`;

function FriendCard(props) {
    return(
        <CardDiv>
            {props.friends.map(friend => (
                <div className="friendCard" key={friend.id}>
                    <h4>{friend.name}</h4>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <button onClick={props.deleteFriend}>Delete Friend</button>
                </div>
            ))}
        </CardDiv>
    )
}

export default FriendCard