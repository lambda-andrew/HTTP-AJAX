import React from 'react';
import Styled from 'styled-components';


const FriendList = ({friends, deleteCard}) => {

    if (friends.length === 0) {
        return (
          <div>
            <p>Oh no, you don't have any friends :-(</p>
            <p>You should add some soon!</p>
          </div>
        );
      }


    return (
        <CardFlex>
            {friends.map(friend => {
                return (
                    <Card key={friend.id}>
                        <DelBox onClick={() => {deleteCard(friend.id)}}></DelBox>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        <Button>Update</Button>
                    </Card>
                )
            })}
        </CardFlex>
    )
}

const CardFlex = Styled.div `
    width: 70%;
    margin: 60px auto 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const Card = Styled.div `
    border: 1px solid lightgray;
    width: 300px;
    margin: 20px;
    box-shadow: 3px 3px 4px rgba(0,0,0, .3);
    transition: all .3s ease-in;
    cursor: pointer;

    :hover{
        transform: scale(1.03);
        box-shadow: 5px 6px 7px rgba(0,0,0, .4);
        color: red;
    }
`

const DelBox = Styled.div `
    height: 20px;
    width: 20px;
   
    background-color: #ff3333;
    margin-left: 94%;
`
const Button = Styled.button `
    font-size: 1rem;
    margin-bottom: 16px;
    border-radius: 4px;
    background: lightblue;
    cursor: pointer;
    :focus {
        outline: none;
    }
`

export default FriendList;