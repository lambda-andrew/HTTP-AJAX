import React from 'react';
import Friend from './Friend';
import AddNewFriend from './AddNewFriend';

function FriendsList (props) {
    return(
        console.log('from friendslist'),
        console.log(props),
        console.log(props.data),
        <div className='container'>
            <div className='FriendsList'>
                {props.data.map(friend => {
                    return <Friend {...props} data={friend} delete={props.delete}/>
                })}
            </div>
            <div className='AddFriend'>
                <AddNewFriend addFriend={props.addFriend} />                
            </div>    
        </div>
    )
}

export default FriendsList;