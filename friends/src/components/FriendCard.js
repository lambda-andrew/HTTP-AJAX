import React from 'react';

const FriendCard = props => {
  const { name, age, email } = props.friendCardProps;
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <div>
          Age: <em>{age}</em>
        </div>
        <div>
          Email: <strong>{email}</strong>
        </div>
      </div>
      <div><button onClick={props.friendDeleteProps}>X</button></div>
    </div>
  )};

export default FriendCard;