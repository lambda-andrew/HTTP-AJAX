import React from 'react';
import Axios from 'axios';
import FriendCard from './FriendCard';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state={
            friendItem: null,
        }
    }

    componentDidMount(){
    const id = this.props.match.params.id;
    this.fetchFriend(id)
    }

    fetchFriend = id => {
        Axios
          .get(`http://localhost:5000/friends/${id}`)
          .then(response => {
            this.setState(() => ({ friendItem: response.data }));
          })
          .catch(error => {
            console.error(error);
          });
      };

      render() {
        if (!this.state.friendItem) {
          return <div>Loading friend information...</div>;
        }
        else {
          return <FriendCard friendCardProps={this.state.friendItem} />
        }
      }
}

export default Friend;