import React, {Component} from 'react';
import Styled from 'styled-components';

class AddFriend extends Component {

   state = {
       name: '',
       age: '',
       email: ''
   }

   handleSubmit = (e) => {
       e.preventDefault();
       this.props.addCard(this.state)
       this.setState({
            name: '',
            age: '',
            email: ''
       })
   }

   handleChange = (e) => {
       this.setState({
          [e.target.id]: e.target.value
       })
   }


    render(){
        return (
            <FormWrapper>
                <h1>Add A Friend!  Hurry!</h1>
                <Form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label>Age</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label>email</label>
                    <input type="text" id="email" onChange={this.handleChange}/>
                    <Button>Submit</Button>
                </Form>
            </FormWrapper>
        )
    }
    // render(){
    //     return (
    //         <FormWrapper>
    //             <Header>Add A Friend!  Hurry!</Header>
    //             <Form onSubmit={this.handleSubmit}>
    //                 <Label>Name</Label>
    //                 <Input type="text" id="name" onChange={this.handleChange}/>
    //                 <Label>Age</Label>
    //                 <Input type="text" id="age" onChange={this.handleChange}/>
    //                 <Label>email</Label>
    //                 <Input type="text" id="email" onChange={this.handleChange}/>
    //                 <Button>Submit</Button>
    //             </Form>
    //         </FormWrapper>
    //     )
    // }
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
// const Label = Styled.label `
//     display: block;
//     font-size: 1.5rem;
//     margin-bottom: 8px;
//     margin-left: 6px;
// `
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
// const Input = Styled.input `
//     width: 470px;
//     font-size: 1.5rem;
//     margin-bottom: 20px;
    
//     border-radius: 4px;
//     border: 1px solid lightgray;
//     padding: 8px 0;
//     text-indent: 6px;
//     `
const Button = Styled.button `
    display: block;
    font-size: 1.5rem;
    width: 478px
    padding: 6px 0;
    border-radius: 4px;
    border: 1px solid lightgray;
    background-color: lightblue;
    `
// const Header = Styled.h1 `
//     text-align: center;
//     padding-bottom: 30px;
//     `


export default AddFriend;