import React from 'react';
import styled from 'styled-components';
import Details from '../details/Details';
import Contributes from '../contributes/Contributes';

const Div = styled.div`
    margin: auto;
    display: flex;
`;

const UserPage = () => {

    return <Div>
        <Details/>
        <Contributes/>
    </Div>
}

export default UserPage;