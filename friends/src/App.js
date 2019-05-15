import React from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './Components/FriendsList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name:'',
      age:'',
      email:'',
      id:''
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({
          friends: response.data
        }))
      })
          .catch(error => {
            console.log('Server Error', error)
          })
  }

  createFriend = event => {
    event.preventDefault();

    let newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(error => {
        console.log('Server Error', error)
      })
  }

  updateName = event => {
    this.setState({
      name: event.target.value
    })
  }

  updateAge = event => {
    this.setState({
      age: event.target.value
    })
  }

  updateEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  updateId= event => {
    this.setState({
      id: event.target.value
    })
  }

  updateFriend= event => {
    event.preventDefault();

    let newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
  }


  deleteFriend = event => {
    event.preventDefault();

    axios
      .delete(`http://localhost:5000/friends/${this.state.id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

render() {
  return (
    <div className="App">
      <FriendsList friends={this.state.friends} />

      <form>
        <input
          placeholder='id'
          type='text'
          name='id'
          onChange = {this.updateId}
        />
        <input
          placeholder='name'
          type='text'
          name='name'
          onChange={this.updateName} />
        <input
          placeholder='age'
          type='text'
          name='age' />
        <input
          placeholder='email'
          type='text'
          name='email' />

      </form>
      <button onClick= {(event)=> this.createFriend(event)} >Create New Friend </button>

      <button onClick={(event)=> this.deleteFriend(event)}>Delete Friend</button>
    </div>
  );
}
}