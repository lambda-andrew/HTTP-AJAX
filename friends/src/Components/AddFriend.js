import React from 'react';


function AddFriend(props, i) {
    return (
        <form onSubmit={props.friendFormSubmit}>
            <input type="hidden" value={i+1} />
            <input name="name" placeholder="Name" value={props.addFriendName} onChange={props.handleChange}></input>
            <input name="age" placeholder="Age" value={props.addFriendAge} onChange={props.handleChange}></input>
            <input name="email" placeholder="Email" value={props.addFriendEmail} onChange={props.handleChange}></input>
            <button type="submit" onClick={props.friendFormSubmit}>Add A Friend!</button>
        </form>
    )
}

export default AddFriend

