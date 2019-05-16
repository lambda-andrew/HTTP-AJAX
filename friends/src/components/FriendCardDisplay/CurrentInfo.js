import React from 'react';

const CurrentInfo = props => {  
    return(
        <div className='friend'>
            <div className='friendHeader'>
                <h2>{props.data.name}</h2>
                <button onClick={props.delete}>x</button>
            </div>
            <ul>
                <li>{`Age: ${props.data.age}`}</li>
                <li>{`E-mail: ${props.data.email}`}</li>
            </ul>
            <button onClick={props.update}>Update Info</button>
        </div>
    )
}

export default CurrentInfo;