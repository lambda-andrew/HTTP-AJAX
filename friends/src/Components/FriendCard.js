import React from 'react';

function FriendCard(props) {
    return(
        <>
            {props.friends.map(friend => (
                <div className="friendCard" key={friend.id}>
                    <h4>{friend.name}</h4>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </>
    )
}

export default FriendCard