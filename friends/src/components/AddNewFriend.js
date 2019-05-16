import React from 'react';

class AddNewFriend extends React.Component {
    state = {
        newFriend: {
            name: '',
            age: '',
            email: ''
        }
    }

    handlesChanges = e => {
        e.persist();
        this.setState( prevState => ({
            newFriend: {
                ...prevState.newFriend,
                [e.target.name]: e.target.value
            }
        }))
    }

    submit = e => {
        e.preventDefault();
        this.setState({
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        })
        this.props.addFriend(this.state.newFriend)
    }

    render() {
        return(
            console.log(this.state.newFriend),
            <form onSubmit={this.submit}>
                <label>Add a New Friend</label>
                <input onChange={this.handlesChanges} value={this.state.newFriend.name} name='name' placeholder='Name of New Friend' type='text'/>
                <input onChange={this.handlesChanges} value={this.state.newFriend.age} name='age' placeholder='Age of New Friend' type='number'/>
                <input onChange={this.handlesChanges} value={this.state.newFriend.email} name='email' placeholder='Email of New Friend' type='email'/>
                <button>Save new friend</button>
            </form>
        )
    }
}

export default AddNewFriend;