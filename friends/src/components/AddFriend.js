import React, {Component} from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

class AddFriend extends Component {

 constructor(props) {
     super(props);

     this.state = {
        friendInfo: {
          name: '',  
           age: '',
         email: ''
      }
    }
 }
   

  handleChange = (e) => {
        this.setState({
            friendInfo: {
            ...this.state.friendInfo,
        [e.target.id]: e.target.value
        }
     });
  }

   addCard = (e) => {
       e.preventDefault();
       this.props.addCard(this.state.friendInfo);
   }
//    handleSubmit = (e) => {
//        e.preventDefault();
//        this.props.addCard(this.state)
//        this.setState({
//             name: '',
//             age: '',
//             email: ''
//        })
//    }

   


    render(){
        return (
            <FormWrapper>
                <h1>Add A Friend!  Hurry!</h1>
                <Form onSubmit={this.addCard}>
                    <label>Name</label>
                    <input type="text" 
                           id="name" 
                           onChange={this.handleChange}
                           value={this.state.friendInfo.name}
                           />
                    <label>Age</label>
                    <input type="text" 
                           id="age" 
                           onChange={this.handleChange}
                           value={this.state.friendInfo.age}
                           />
                    <label>email</label>
                    <input type="text" 
                           id="email" 
                           onChange={this.handleChange}
                           value={this.state.friendInfo.email}
                           />
                    <Button>Submit</Button>
                </Form>
            </FormWrapper>
        )
    }
}


const FormWrapper = Styled.div `
    margin: 100px auto;
    
    width: 480px;
    border: 1px solid gray;
    padding: 40px 20px 20px 20px;
    border-radius: 5px;
    background: #fff;

    h1 {
        text-align: center;
        padding-bottom: 30px;
    }
    
    `

const Form = Styled.form `
    width: 480px;

    label {
        display: block;
        font-size: 1.5rem;
        margin-bottom: 8px;
        margin-left: 6px;
    }
    input {
        width: 470px;
        font-size: 1.5rem;
        margin-bottom: 20px;
    
        border-radius: 4px;
        border: 1px solid lightgray;
        padding: 8px 0;
        text-indent: 6px;
    }
`

const Button = Styled.button `
    display: block;
    font-size: 1.5rem;
    width: 478px
    padding: 6px 0;
    border-radius: 4px;
    border: 1px solid lightgray;
    background-color: lightblue;
    `

AddFriend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}
export default AddFriend;