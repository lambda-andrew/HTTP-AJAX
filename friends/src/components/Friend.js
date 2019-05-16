import React from 'react';
import UpdateInfo from './FriendCardDisplay/UpdateInfo';
import CurrentInfo from './FriendCardDisplay/CurrentInfo';

class Friend extends React.Component {
    state = {
        updateInfo: false
    }
    deleteHandler = e => {
        e.preventDefault();
        this.props.delete(this.props.data.id)
    }

    updateDisplay = e  => {
        e.preventDefault();
        this.setState({
            updateInfo: !this.state.updateInfo
        })
    }

    render() {
        if(!this.state.updateInfo) {
            return <CurrentInfo {...this.props} data={this.props.data} delete={this.deleteHandler} update={this.updateDisplay}/>
        } else {
            return <UpdateInfo {...this.props} data={this.props.data} updateDisplay={this.updateDisplay} update={this.props.update}/>
        }
    }
}

export default Friend;