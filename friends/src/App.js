import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import './App.css';


class App extends React.Component {
  state = {
    friends: []
  }

  componentDidMount () {
    axios.get('http://localhost:5000/friends')
      .then( res => {
        this.setState({
          friends: res.data
        })
      })
      .catch( err => console.log(err))
  }

  addFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err))
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err))
  }

  updateFriend = (updatedFriend, id) => {
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ props => <FriendsList {...props} data={this.state.friends} addFriend={this.addFriend} delete={this.deleteFriend} update={this.updateFriend}/> } />
      </div>
    );
  }
}

export default App;
