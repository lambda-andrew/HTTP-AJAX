import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import AddNewFriend from './components/AddNewFriend';
import './App.css';

class App extends React.Component {
  state = {
    friends: []
  }

  componentDidMount () {
    axios.get('http://localhost:5000/friends')
      .then( res => {
        console.log(`from cdm`)
        console.log(res.data)
        this.setState({
          friends: res.data
        })
      })
      .catch( err => console.log(err))
  }

  render() {
    console.log('from render')
    console.log(this.state.friends)
    return (
      <div className="App">
        <div className='FriendsList'>
          <Route exact path='/' render={ props => <FriendsList {...props} data={this.state.friends}/> } />
        </div>
        <div className='AddFriend'>
          <AddNewFriend />
        </div>
      </div>
    );
  }
}

export default App;
