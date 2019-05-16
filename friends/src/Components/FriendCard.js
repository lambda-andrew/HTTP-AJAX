import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
width: 900px
display: flex
justify-content: center
flex-wrap: wrap-reverse
`;

function FriendCard(props) {

    const deleteHandler = (event, id) => {
        event.preventDefault();
        props.deleteFriend(id)
      };


    return(
        <CardDiv>
            {props.friends.map(friend => (
                <div className="friendCard" key={friend.id}>
                    <h4>{friend.name}</h4>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button onClick={(event) => deleteHandler(event, friend.id)}>Delete Friend</button>
                </div>
            ))}
        </CardDiv>
    )
}

export default FriendCard