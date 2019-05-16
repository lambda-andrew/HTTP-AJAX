import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const FriendList = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;


export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FriendList>
                {this.props.friends.map(friend => (<Friend id={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                ))}
            </FriendList>
        )
    }
}