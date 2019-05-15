import React from 'react';

function AddFriend(props) {
    return (
        <form onSubmit={props.friendFormSubmit}>
            <input name="name" placeholder="Name" value={props.addFriendName} onChange={props.handleNameChange}></input>
            <input name="age" placeholder="Age" value={props.addFriendAge} onChange={props.handleAgeChange}></input>
            <input name="email" placeholder="Email" value={props.addFriendEmail} onChange={props.handleEmailChange}></input>
            <button type="submit" onClick={props.friendFormSubmit}>Add A Friend!</button>
        </form>
    )
}

export default AddFriend