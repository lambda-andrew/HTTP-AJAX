import React from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import AddFriend from './AddFriend'

class Friends extends React.Component {
    constructor(){
    super()
    this.state = {
        friends: [],
        name: "",
        age: "",
        email: "",
        message: "",
    }

    this.addAFriend = this.addAFriend.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
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

    addAFriend(e) {
        e.preventDefault();
        axios
            .post('http://localhost:5000/friends',{
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,
            })
            .then(res =>{
                this.setState({
                  friends: res.data,
                  name:"",
                  age:"",
                  email:"",
                  message: "You got it, Dude!"
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    name:"",
                    age:"",
                    email:"",
                    message: "Helloooo, Error here!"
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

    render() {
        console.log(this.state.message);
        return (
            <div>
                <FriendCard friends={this.state.friends}/>
                <AddFriend 
                    friendFormSubmit={this.addAFriend} 
                    addFriendName={this.state.name} 
                    addFriendAge={this.state.age} 
                    addFriendEmail={this.state.email}
                    handleNameChange={this.handleNameChange}
                    handleAgeChange={this.handleAgeChange}
                    handleEmailChange={this.handleEmailChange}/> 
            </div>
        )
    }
}

export default Friends