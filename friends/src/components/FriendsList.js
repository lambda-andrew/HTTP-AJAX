import React from 'react';
import Friend from './Friend';

function FriendsList (props) {
    return(
        console.log('from friendslist'),
        console.log(props),
        console.log(props.data),
        <div>
        {props.data.map(friend => {
             return <Friend data={friend}/>
         })}
        </div>
    )
}

export default FriendsList;