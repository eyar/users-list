import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setUser } from '../../features/userDetails/userDetailsSlice';

const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 20px;
    width: 250px;
    position: absolute;
    top: 52px;
    bottom: 0;
    overflow-y: auto;
    li{
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        div{
            display: flex;
            margin: auto 0;
        }
        img{
            border-radius: 50%;
        }
    }
`;

const UsersList = () => {
    const { users } = useSelector(state => state.data);
    const dispatch = useDispatch();

    return <Ul>
        {
            users.map(({name, avatar},key)=><li key={key} onClick={()=>dispatch(setUser({...users[key]}))}>
                <div>{name}</div>
                <img src={avatar} alt='' width='50' height='50'/>
            </li>)
        }
    </Ul>
}

export default UsersList;