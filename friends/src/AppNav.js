import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'

const AppNav = () => {
    return(
        <div>
        <nav className="navigation">
        <NavLink activeClassName="active" exact to="/">Home </NavLink>
        <NavLink activeClassName="active" to="/friendForm">*Clap Clap Clap Clap*</NavLink>
        </nav>
        </div>
    )
}

export default AppNav