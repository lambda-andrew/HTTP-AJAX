import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
    state = {
        friends: [],
        message: ""
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(res => {
                this.setState({ friends: res.data })
            })
            .catch(err => { 
                console.log(err)
                this.setState({
                message: "Data fetch failed!"
            })})
    }

    render() {
        console.log(this.state.message);
        return (
            <div>
                {this.state.friends.map(friend => (
                    <div>{friend.name}</div>
                ))}
            </div>
        )
    }
}

export default Friends