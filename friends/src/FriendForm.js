import React from 'react';

const FriendForm = (props) => {
    return(
    <div>
        <form onSubmit={props.friendFormSubmit}>
            <input type="text" name="name" placeholder="Name" value={props.addFriendName} onChange={props.handleNameChange}></input>
            <input type="text" name="age" placeholder="Age" value={props.addFriendAge} onChange={props.handleAgeChange}></input>
            <input type="text" name="email" placeholder="Email" value={props.addFriendEmail} onChange={props.handleEmailChange}></input>
            <button type="submit" >Click to add a friend!</button>
        </form>
    </div>
    )
}

export default FriendForm