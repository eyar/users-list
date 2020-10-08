import React from 'react';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../features/data/dataSlice';
import { Styled } from './TopBar.style';

const TopBar = () => {
    const dispatch = useDispatch();

    return <Styled>
        <h1>RafaelHub Users</h1>
        <i className='fa' onClick={()=>dispatch(fetchUsers())}>&#xf021;</i>
        <DarkModeToggle/>
    </Styled>
}

export default TopBar;