import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Styled, Separator } from './UsersList.style';
import { setUser } from '../../features/userDetails/userDetailsSlice';

const UsersList = () => {
    const { users } = useSelector(state => state.data);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(setUser({...users[id]}));
        window.scrollTo(0,0);
    }

    return <Styled>
        <ul>
            {users.map(({name, avatar},key)=><li key={key} onClick={()=>handleClick(key)} >
                <div>{name}</div>
                <img src={avatar} alt='' width='50' height='50'/>
            </li>)
            }
        </ul>
    </Styled>
}

export default UsersList;