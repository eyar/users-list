import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Div = styled.div`
    display: flex;
    margin: 52px auto;
    text-align: center;
    flex-direction: column;
`;

const Error = () => {
    const {  error } = useSelector(state => state.data);

    return <Div>
        <h1>Something went wrong...</h1>
        <div>{error.toString()}</div>
    </Div>
}

export default Error;