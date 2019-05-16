import React from 'react';

export default class UpdateInfo extends React.Component {
    state = {
        updateFriend: {
            name: this.props.data.name,
            age: this.props.data.age,
            email: this.props.data.email,
            id: this.props.data.id
        }
    }
   
    updateInfo = e => {
        e.preventDefault();
        this.props.update(this.state.updateFriend, this.state.updateFriend.id)
        this.props.updateDisplay(e);
    }

    handleChanges = e => {
        e.persist();
        this.setState( prevState => ({
            updateFriend: {
                ...prevState.updateFriend,
                [e.target.name]: e.target.value
            }
        }))
    }

    render() {
        return(
            <div className='friend'>
                <div className='friendHeader'>
                    <h2>{`Update ${this.state.updateFriend.name}`}</h2>
                    <button className='headerBtn' onClick={this.props.updateDisplay}>x</button>
                </div>
                <form onSubmit={this.updateInfo}>
                    <input onChange={this.handleChanges} name='name' value={this.state.updateFriend.name}/>
                    <input onChange={this.handleChanges} name='age' value={this.state.updateFriend.age}/>
                    <input onChange={this.handleChanges} name='email' value={this.state.updateFriend.email}/>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

