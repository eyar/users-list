import React from 'react';
import styled from 'styled-components';
import Details from '../details/Details';
import Contributes from '../contributes/Contributes';
import { desktopBreakpoint } from '../../features/Themes';

const Div = styled.div`
    margin: auto;
    display: flex;
    @media (max-width: ${desktopBreakpoint}px){
        display: flex;
        flex-direction: column;
        
    }
`;

const UserPage = () => {

    return <Div>
        <Details/>
        <Contributes/>
    </Div>
}

export default UserPage;