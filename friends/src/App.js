import React from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './Components/FriendsList';
import styled from 'styled-components';


const AppDiv = styled.div`
max-width: 1280px;
width: 100%;
margin: 0 auto;
font-family: 'Quicksand', sans-serif;
`;

const HeaderDiv = styled.div`
height: 60px;
margin: 0px auto;
background-color: #3b5998;
color : white;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const HeaderH1 = styled.h1`
margin: 0;
font-size: 30px;
padding: 10px;
`;

const FormAndButtonSection = styled.div`
display: flex;
flex-direction: column;
margin: 40px auto;
width: 1000px;
border: solid lightgrey 1px;
align-items: center;
`;

const FormAndButtonHeader = styled.div`
height: 50px;
width: 1000px;
background-color: #dfe3ee;
display: flex;
justify-content: flex-start;
align-items: center;

`;

const TitleH2 = styled.h2`
font-size: 20px;
margin: 0;
padding-left: 10px;
`;

const FormDiv = styled.div`
display: flex;
justify-content: center;
height: 290px;
align-items: center;
`;

const Form = styled.form`
width: 400px;
height: 290px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const BoxDiv = styled.div`
margin:  0;
`;

const ButtonSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 400px;
height: 290px;
border: none;
align-items: center;
padding: 0;
`;

const Input = styled.input`
width: 300px;
height: 30px;
border-radius: 10px;
border : solid lightgrey 1px;
font-size: 15px;
padding: 0 10px;
font-style: oblique;
`;

const FormH5 = styled.h5`
font-size: 15px;
margin: 0;
padding: 10px 0;
`;

const Button = styled.button`
width: 240px;
height: 35px;
margin: 5px;
border-radius: 5px;
font-size: 18px;
font-weight: bold;
color: white;
background-color:  #3b5998;
font-family: 'Quicksand', sans-serif;
:hover {
  background-color: white;
  color:#3b5998 ;
}
`;

const FriendsListDiv = styled.div`
display: flex;
flex-direction: column;
margin: 30px auto;
width: 1000px;
border: solid lightgrey 1px;

`;

const FriendsListHeader = styled.div`
height: 50px;
width: 1000px;
background-color: #dfe3ee;
display: flex;
justify-content: flex-start;
align-items: center;

`;

const FooterDiv = styled.div`
height: 60px;
margin: 0px auto;
background-color: #3b5998;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      id: ''
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  updateFriend = event => {
    event.preventDefault();
    let newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios
      .put(`http://localhost:5000/friends/${this.state.id}`, newFriend)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(error => {
        console.log('Server Error', error);
      })
  }

  deleteFriend = (event, id) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:5000/friends/${id}`)
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
      <AppDiv>
        <HeaderDiv>
          <HeaderH1>FriendsBook</HeaderH1>
        </HeaderDiv>

        <FormAndButtonSection>
          <FormAndButtonHeader>
            <TitleH2>Create New Friend</TitleH2>
          </FormAndButtonHeader>

          <FormDiv>
            <Form>
              {/* <BoxDiv>
                <FormH5>Friend's ID</FormH5>
                <Input
                  placeholder='id'
                  name='id'
                  onChange={this.handleChange}
                />
              </BoxDiv> */}
              <BoxDiv>
                <FormH5>Friend's Name</FormH5>
                <Input
                  placeholder='name'
                  type='text'
                  name='name'
                  onChange={this.handleChange} /></BoxDiv>

              <BoxDiv>
                <FormH5>Friend's Age</FormH5>
                <Input
                  placeholder='age'
                  type='text'
                  name='age'
                  onChange={this.handleChange}
                /></BoxDiv>

              <BoxDiv>
                <FormH5>Friend's Email</FormH5>
                <Input
                  placeholder='email'
                  type='text'
                  name='email'
                  onChange={this.handleChange} /></BoxDiv>
            </Form>

            <ButtonSection>
              <Button onClick={(event) => this.createFriend(event)}> Create New Friend </Button>
              <Button onClick={(event) => this.updateFriend(event)}> Update </Button>
            </ButtonSection>
          </FormDiv>
        </FormAndButtonSection>

        <FriendsListDiv>
          <FriendsListHeader>
            <TitleH2>Your Friends</TitleH2>
          </FriendsListHeader>
          <FriendsList friends={this.state.friends} deleteFriend={this.deleteFriend} />
        </FriendsListDiv>

        <FooterDiv>
          <p></p>
        </FooterDiv>

      </AppDiv>
    );
  }
}