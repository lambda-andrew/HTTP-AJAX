import React from 'react';

const AddNewFriend = () => {
    return(
        <form>
            <h2>Add a New Friend</h2>
            <input placeholder='Name of New Friend' type='text'/>
            <input placeholder='Age of New Friend' type='number'/>
            <input placeholder='Email of New Friend' type='email'/>
            <button>Save new friend</button>
        </form>
    )
}

export default AddNewFriend;