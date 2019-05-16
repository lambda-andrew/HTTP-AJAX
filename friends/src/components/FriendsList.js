import React from 'react';
import Friend from './Friend';
import AddNewFriend from './AddNewFriend';

function FriendsList (props) {
    return(
        <div className='container'>
            <div className='FriendsList'>
                {props.data.map(friend => {
                    return <Friend {...props} key={friend.id} data={friend} delete={props.delete} update={props.update}/>
                })}
            </div>
            <div className='AddFriend'>
                <AddNewFriend addFriend={props.addFriend} />                
            </div>    
        </div>
    )
}

export default FriendsList;