import React from 'react';

function AddFriend() {
    return (
        <form>
            <input 
                type="text"
                name="name"
                value="name"
                placeholder="Name"
            />
            <input 
                type="text"
                name="age"
                value="age"
                placeholder="Age"
            />
            <input 
                type="text"
                name="email"
                value="email"
                placeholder="Email"
            />
            <button>Add Friend</button>
        </form>
    )
}

export default AddFriend