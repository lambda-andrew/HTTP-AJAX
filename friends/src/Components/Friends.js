import React from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import AddFriend from './AddFriend'

import styled from 'styled-components';

const FriendsCardsList = styled.div`
display: flex
align-items: center
flex-direction: column
margin-top: 20px`;

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

    addAFriend = (e) => {
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
            <FriendsCardsList>
                <AddFriend 
                    friendFormSubmit={this.addAFriend} 
                    addFriendName={this.state.name} 
                    addFriendAge={this.state.age} 
                    addFriendEmail={this.state.email}
                    handleNameChange={this.handleNameChange}
                    handleAgeChange={this.handleAgeChange}
                    handleEmailChange={this.handleEmailChange} />
                <FriendCard friends={this.state.friends} deleteFriend={this.deleteFriend}/>
            </FriendsCardsList>
        )
    }
}

export default Friends