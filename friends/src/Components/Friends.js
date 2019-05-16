import React from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import AddFriend from './AddFriend'

import styled from 'styled-components';

const FriendsCardsList = styled.div`
display: flex
align-items: center
flex-direction: column
`;

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

    deleteFriend = id => {
        axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(res => {
          this.setState ({
            friends: res.data,
            })
        })
        .catch(err => {
          console.log(err)
          this.setState({
            message: "Helllooo, Errorrrr!",
          })
        })
      }

    handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    }

    render() {
        return (
            <>
                <h1>Shameless!</h1>
                <FriendsCardsList>
                    <AddFriend 
                        friendFormSubmit={this.addAFriend} 
                        addFriendName={this.state.name} 
                        addFriendAge={this.state.age} 
                        addFriendEmail={this.state.email}
                        handleChange={this.handleChange} />
                    <FriendCard friends={this.state.friends} deleteFriend={this.deleteFriend}/>
                </FriendsCardsList>
            </>
        )
    }
}

export default Friends