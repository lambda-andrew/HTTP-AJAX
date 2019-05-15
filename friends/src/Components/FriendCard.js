import React from 'react';
import { Link } from 'react-router-dom'; 

function FriendCard(props) {
    return(
        <>
            {props.friends.map(friend => (
                <div className="friendCard" key={friend.id}>
                    <h4>{friend.name}</h4>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <button onClick={props.deleteFriend}>Delete Friend</button>
                </div>
            ))}
        </>
    )
}

export default FriendCard