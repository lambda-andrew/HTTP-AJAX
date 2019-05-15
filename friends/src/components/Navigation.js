import React from 'react';
import {Link} from 'react-router-dom';
import Styled from 'styled-components';


const Navigation = () => {
    return (
        <AddFriend>
            <Link to="/" id="home">Home</Link>
            <Link to="/addfriend">Add A Friend</Link>
        </AddFriend>
    )
}


const AddFriend = Styled.div `
     padding-top: 60px;
     
     #home {
         padding-right: 20px;
     }
`


export default Navigation;