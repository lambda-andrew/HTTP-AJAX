import React from 'react';
import Axios from 'axios';
import {Route} from 'react-router-dom';
import AppNav from './AppNav';
import './App.css'

import FriendList from './components/FriendList';
import FriendForm from './FriendForm.js';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      friends: [],
      message: "",
    }
    this.addAFriend = this.addAFriend.bind(this)
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/friends')
    .then(res =>{
      this.setState({
        friends: res.data,
        message: "Could I BE anymore of a functioning app?"
      })
    })
    .catch(err => {
      console.log(err)
      this.setState({message: "I can('t) handle this. Handle is my middle name. Actually, handle is the middle of my first name."})
    })
  }

  addAFriend(item){
    Axios.post('http://localhost:5000/friends', item)
    .then(res =>{
      this.setState({
        friends: res.data,
      });
      this.props.history.push("/")
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteFriend = id => {
    console.log("Friendship ended!")
    Axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState ({
        friends: res.data,
        message: "Alright, I took the quiz, and it turns out I put styling before coding"
        })
    })
    .catch(err => {
      console.log(err)
      this.setState({
        message: "Until the age of 25, I thought the only response to 'I love you' was '404' ",
      })
    })
  }

  render(){
    return(
      <div className="App">
        <h1>{this.state.message}</h1>
        <AppNav />
        <Route path="/friendForm" render={
          props => ( 
          <FriendForm 
          {...props}
          friendFormSubmit={this.addAFriend} 
          />)}
        />
        <Route exact path="/" render={
            props => (
            <FriendList 
            {...props} 
            friendList={this.state.friends} 
            deleteFriend={this.deleteFriend}
            />)}
          />
      </div>
    )
  }
}

export default App;
