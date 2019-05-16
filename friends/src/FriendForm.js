import React from 'react';
import './components/Friends.css'

class FriendForm extends React.Component {
    state={
        friend: {
            name: "",
            age: "",
            email: "",
        }
    }

    handleChanges = e => {
        e.persist();
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value
            }
        }));
    }
    
    submitHandler = e => {
        e.preventDefault();
        this.props.friendFormSubmit(this.state.friend)
    }

    render(){
    return(
    <div className="formdiv">
        <h3>So, no one told you life was going to be this way?</h3>
        <form onSubmit={this.submitHandler} className="form">
            <h4>Name?</h4>
            <input 
                name="name" 
                type="text" 
                placeholder="Name" 
                value={this.state.friend.name} 
                onChange={this.handleChanges}>
            </input>
            <h4>Age?</h4>
            <input 
                name="age" 
                type="text" 
                placeholder="Age" 
                value={this.state.friend.age} 
                onChange={this.handleChanges}>
            </input>
            <h4>Email?</h4>
            <input 
                name="email" 
                type="text" 
                placeholder="Email" 
                value={this.state.friend.email} 
                onChange={this.handleChanges}>
            </input>
            <button type="submit" className="addButton">I'll be there for you!</button>
        </form>
    </div>
    )}
}

export default FriendForm