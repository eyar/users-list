import React from 'react';
import styled from 'styled-components';
import UsersList from '../usersList/UsersList';
import UserPage from '../userPage/UserPage';
import { desktopBreakpoint } from '../../features/Themes';

const Div = styled.div`
    display: flex;
    @media (min-width: ${desktopBreakpoint}px){
        margin-top: 52px;
    }
    @media (max-width: ${desktopBreakpoint}px){
        margin-top: 104px;
        flex-direction: column-reverse;
    }
`;

const Container = () => <Div>
    <UsersList/>
    <UserPage/>
</Div>

export default Container;