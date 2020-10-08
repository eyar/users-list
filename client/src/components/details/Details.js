import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Styled, Text, Buttons } from './Details.style';
import { removeUser } from '../../features/data/dataSlice';
import { setUser } from '../../features/userDetails/userDetailsSlice';
import { updateUser } from '../../features/data/dataSlice';

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

    return Object.keys(details).length !== 0 && <Styled>
        <div className='buttons'>
            <button onClick={handleEdit}>Edit</button><button onClick={()=>dispatch(removeUser(id))}>Remove User</button>
        </div>
        {avatar && <img src={avatar} alt='' width='128' height='128'/>}
        {
        <div className='text'>
            <div>{name}</div>
            <div>{email}</div>
            <div>{ownership}</div>
            <div>{id}</div>
        </div>
        }
        {
        edit && <form onSubmit={handleSubmit}>
            <input defaultValue={name} name='name'/>
            <input defaultValue={email} name='email'/>
            <input type='submit'/>
        </form>
        }
    </Styled>
}
export default UserPage;
