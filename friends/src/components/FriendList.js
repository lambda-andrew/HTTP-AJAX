import React from 'react';

const FriendList = (props) => {
  const friends = props.friendListProps.find(
    friend => `${friend.id}` === props.match.params.id
  )

    return(
     <div>
        {props.friendListProps.map(friend => (
        <div>
        <h1>{friend.name}</h1>
        <h3>{friend.age}</h3>
        <h3>{friend.email}</h3>
        </div>
        ))}
      </div>
    )
}

export default FriendList;