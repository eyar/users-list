import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Styled } from './UsersList.style';
import { setUser } from '../../features/userDetails/userDetailsSlice';

const UsersList = () => {
    const { users } = useSelector(state => state.data);
    const dispatch = useDispatch();

    return <Styled>
        <ul>
            {
                users.map(({name, avatar},key)=><li key={key} onClick={()=>dispatch(setUser({...users[key]}))}>
                    <div>{name}</div>
                    <img src={avatar} alt='' width='50' height='50'/>
                </li>)
            }
        </ul>
    </Styled>
}

export default UsersList;