import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../features/data/dataSlice'
import { setUser } from '../../features/userDetails/userDetailsSlice'
import { updateUser } from '../../features/data/dataSlice';

const Div = styled.div`
    margin: 10px;
    line-height: 1.7;
    img{
        border-radius: 10px;
        margin-right: 10px;
    }
`;

const Right = styled.div`
    float: right;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 18px;
    button{
        font-size: 20rem;
        padding:0.35em 1.2em;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    > *{
        margin: 10px;
    }
    input[type=submit]{
        width: 100px;
        margin: auto;
    }
`;

const UserPage = () => {
    const { details } = useSelector(state => state.userDetails);
    const {name, email, avatar, ownership, id } = details;
    
    const dispatch = useDispatch();
    
    const handleEdit = () => {
        setEdit(true);
    }

    const [edit,setEdit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const {name, email} = event.target;
        const obj = { ...details, name: name.value, email: email.value };
        dispatch(setUser(obj));
        dispatch(updateUser(obj));
        setEdit(false);
    }

    return Object.keys(details).length !== 0 && <Div>
        <Buttons>
            <button onClick={handleEdit}>Edit</button><button onClick={()=>dispatch(removeUser(id))}>Remove User</button>
        </Buttons>
        {avatar && <img src={avatar} alt='' width='128' height='128'/>}
        {
        <Right>
            <div>{name}</div>
            <div>{email}</div>
            <div>{ownership}</div>
            <div>{id}</div>
        </Right>
        }
        {
        edit && <Form onSubmit={handleSubmit}>
            <input defaultValue={name} name='name'/>
            <input defaultValue={email} name='email'/>
            <input type='submit'/>
        </Form>
        }
    </Div>
}
export default UserPage;
