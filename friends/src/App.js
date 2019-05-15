import React from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Navigation from './components/Navigation';
import uuid from 'uuid';



import {Route} from 'react-router-dom';



class App extends React.Component {

  constructor(props){
     super(props);

     this.state = {
        friends: []
     }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res => {
         console.log(res);
         this.setState({
           friends: res.data
         });
      })
    .catch(err => console.log({message: 'there was an error'}))

    


  }


deleteCard = (friend) => {
  const url = `http://localhost:5000/friends${friend}`

  axios.delete(url)
    .then(res => {
      this.setState(previousState => {
        return {
          friends: previousState.friends.filter(f => f !== friend)
        }
      })
    })
    .catch(err => console.log(err))
}


  // deleteCard = (id) => {
  //   let friends = this.state.friends.filter(friend => {
  //     return friend.id !== id;
  //   })
  //   this.setState({
  //     friends: friends
  //   })
  // }

  addCard = (friend) => {
    friend.id = uuid();
    let friends = [...this.state.friends, friend];
    this.setState({
      friends: friends
    })
  }

  render(){
  return (
    <div className="App">
        <Navigation />
        <Route exact path="/" 
               render={() => < FriendList  friends={this.state.friends} deleteCard={this.deleteCard}/> }/>
        <Route  path="/addfriend" render={() => <AddFriend friends={this.state.friends} addCard={this.addCard}/> }/>
    </div>
  );
  }
}

export default App;
