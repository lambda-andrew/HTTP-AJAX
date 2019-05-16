import React from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Navigation from './components/Navigation';
import PropTypes from 'prop-types';


import {Route} from 'react-router-dom';


class App extends React.Component {

  constructor(props){
     super(props);

     this.state = {
       activeFriend: null,
        friends: []
     }
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res => {
         this.setState({
           friends: res.data
         });
      })
    .catch(err => console.log({message: 'there was an error'}))
  }


  addCard = friend => {
    axios.post('http://localhost:5000/friends', friend)
      .then((res) => {
        this.setState({friends: res.data})
         this.props.history.push("/");
      })
      .catch((err) => { console.log(err)})
  }


  deleteCard = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then((res) => {
       this.setState({friends: res.data})
       this.props.history.push("/");
    })
    .catch((err) => { console.log(err)})
  }










  
  populateForm = friend => {
    this.setState({
      activeFriend: friend
    });

    this.props.history.push('/addfriend')
  }

  updateCard = (friend) => {
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(res => {
      this.setState({
        activeFriend: null,
        friends: res.data
      })
      this.props.history.push("/")
    })
    .catch(res => {console.log(res)})
  }




  render(){
    console.log(this.state)
  return (
    <div className="App">
        <Navigation />


        <Route exact path="/" 
               render={(props) => < FriendList  {...props} friends={this.state.friends} deleteCard={this.deleteCard}   populateForm={this.populateForm}/>   }/>


        <Route  path="/addfriend" render={(props) => <AddFriend  {...props} friends={this.state.friends} addCard={this.addCard} updateCard={this.updateCard} activeFriend={this.state.activeFriend}   /> }/>
    </div>
  );
  }
}


App.propTypes = {
  friends: PropTypes.arrayOf({
     id: PropTypes.number,
     name: PropTypes.string,
     age: PropTypes.number,
     email: PropTypes.string
  })
}

export default App;
