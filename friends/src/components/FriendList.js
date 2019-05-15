import React from 'react';
import FriendCard from './FriendCard';

const FriendList = (props) => {
    return(
     <div className="movie-list">
        {props.friendListProps.map(friend => (
        <FriendCard key={friend.id} friendCardProps={friend} friendDeleteProps={props.deleteFriend}/>
        ))}
      </div>
    )
}

export default FriendList;