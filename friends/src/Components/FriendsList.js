import React from 'react';
import Friend from './Friend';

export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='friendsList'>
                {this.props.friends.map(friend => (<Friend id={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                ))}
            </div>
        )
    }
}