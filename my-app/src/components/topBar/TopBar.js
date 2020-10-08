import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../features/data/dataSlice';

const Div = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 2px solid;
    top: 0;
    position: fixed;
    `;

const H1 = styled.h1`
    font-size: 35rem;
    font-weight: bold;
    display: inline;
    margin-left: 10px;
    `;

const I = styled.i`
    font-size:24px;
    margin: 0px 50px;
    `;

const TopBar = () => {
    const dispatch = useDispatch();

    return <Div>
        <H1>RafaelHub Users</H1>
        <I className='fa' onClick={()=>dispatch(fetchUsers())}>&#xf021;</I>
        <DarkModeToggle/>
    </Div>
}

export default TopBar;