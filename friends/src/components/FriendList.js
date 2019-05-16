import React from 'react';

const FriendList = (props) => {

  const deleteHandler = (event, id) => {
    event.preventDefault();
    props.deleteFriend(id)
  };

  return(
    <div>
      {props.friendList.map(friend => (
      <div key={friend.id} className="friendCard">
      <h1>{friend.name}</h1>
      <h3>{friend.age}</h3>
      <h3>{friend.email}</h3>
      <button onClick={(event) => deleteHandler(event, friend.id)}>Delete Friend</button>
      </div>
      ))}
      
    </div>
  )
}

export default FriendList;