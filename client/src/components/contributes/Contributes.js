import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styled from './Contributes.style';
import {setContributesOrder} from '../../features/userDetails/userDetailsSlice';

const Contributes = () => {
    const { details: { contribute } } = useSelector(state => state.userDetails);
    const dispatch = useDispatch();

    return contribute ? <Styled>
        <h2>Contributions</h2>
        <select onChange={({target:{value}})=>dispatch(setContributesOrder(value))} >
            <option value=''>Sort By</option>
            <option value='date asc'>Date: Ascending</option>
            <option value='date desc'>Date: Descending</option>
            <option value='amount asc'>Contributes: Ascending</option>
            <option value='amount desc'>Contributes: Descending</option>
        </select>
        {
            contribute?.map(({date, amount}, key)=><li key={key}>
                <span>{new Date(+date).toISOString().split('T')[0].split('-').reverse().join('/')}</span><span>{amount}</span>
            </li>)
        }
    </Styled> : <></>;
}
export default Contributes;
