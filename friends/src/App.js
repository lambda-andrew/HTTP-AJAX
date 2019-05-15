import React from 'react';
import Axios from 'axios';
import {Route} from 'react-router-dom';
import AppNav from './AppNav';
// import Friend from './components/Friend';
import FriendList from './components/FriendList';
import FriendForm from './FriendForm.js';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      friends: [],
      name: "",
      age: "",
      email: "",
      message: "",
    }
    this.addAFriend = this.addAFriend.bind(this)
    this.deleteFriend = this.deleteFriend.bind(this)
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/friends')
    .then(res =>{
      console.log(res.data)
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

  addAFriend(event){
    event.preventDefault();
    Axios.post('http://localhost:5000/friends',{
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    })
    .then(res =>{
      console.log(res.data)
      this.setState({
        friends: res.data,
        name:"",
        age:"",
        email:"",
        message: "Gum (from a new friend) would be perfection."
      })
    })
    .catch(err => {
      console.log(err)
      this.setState({
        name:"",
        age:"",
        email:"",
        message: "I'm glad we're having a development phase. I rarely test my apps before I launch them."})
    })
  }

  deleteFriend(){
    console.log("Friendship ended!")
    Axios.delete(`http://localhost:5000/friends/:1`
    .then(res => {
      this.setState ({
        friends: res.data,
        message: "Alright, I took the quiz, and it turns out I put styling before coding"
        })
    }))
    .catch(err => {
      console.log(err)
      this.setState({
        message: "Until the age of 25, I thought the only response to 'I love you' was '404' ",
      })
    })
  }

  handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({
        name: event.target.value,
      })
  }
  handleAgeChange = (event) => {
    console.log(event.target.value)
    this.setState({
      age: event.target.value,
    })
  }
  handleEmailChange = (event) => {
  console.log(event.target.value)
  this.setState({
    email: event.target.value,
  })
  }
  
  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        <AppNav />
        <FriendForm 
        friendFormSubmit={this.addAFriend} 
        addFriendName={this.state.name} 
        addFriendAge={this.state.age} 
        addFriendEmail={this.state.email}
        handleNameChange={this.handleNameChange}
        handleAgeChange={this.handleAgeChange}
        handleEmailChange={this.handleEmailChange}/>
        <Route exact path="/" render={props => (<FriendList {...props} friendListProps={this.state.friends} deleteFriend={this.deleteFriend}/>) }/>
        {/* <Route path="/friends/:id" component={Friend} /> */}
      </div>
    )
  }
}

export default App;
