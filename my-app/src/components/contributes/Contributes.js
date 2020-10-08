import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Ul = styled.ul`
    list-style: none;
    li{
        display: flex;
        justify-content: space-between;
        line-height: 1.7;
    }
`;

const H2 = styled.h2`
    
`;

const Contributes = () => {
    const { details: { contribute } } = useSelector(state => state.userDetails);

    return <Ul>
        {contribute && <>
            <H2>Contributions</H2>
            {
                contribute?.map(({date, amount}, key)=><li key={key}>
                    <span>{new Date(+date).toISOString().split('T')[0].split('-').reverse().join('/')}</span><span>{amount}</span>
                </li>)
            }
        </>
        }
    </Ul>
}
export default Contributes;
