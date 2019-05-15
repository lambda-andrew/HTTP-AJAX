import React from 'react';

const Friend = props => {
    return(
        <div>
            <h2>{props.data.name}</h2>
            <ul>
                <li>{`Age: ${props.data.age}`}</li>
                <li>{`E-mail: ${props.data.email}`}</li>
            </ul>
        </div>
    )
}

export default Friend;