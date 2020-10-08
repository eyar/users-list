import React from 'react';
import styled from 'styled-components';
import UsersList from '../usersList/UsersList';
import UserPage from '../userPage/UserPage';

const Div = styled.div`
    margin-top: 52px;
    display: flex;
`;

const Container = () => <Div>
    <UsersList/>
    <UserPage/>
</Div>

export default Container;