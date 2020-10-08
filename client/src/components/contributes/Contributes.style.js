import styled from 'styled-components';
import { desktopBreakpoint } from '../../features/Themes';

export default styled.ul`
    list-style: none;
    h2{
        margin: 10px 0;
        text-align: center;
    }
    li{
        display: flex;
        line-height: 1.7;
    }
    select{
        display: block;
        margin: auto;
        margin-bottom: 10px;
    }
    @media (max-width: ${desktopBreakpoint}px){
        justify-content: space-between;
    }
    @media (max-width: ${desktopBreakpoint}px){
        padding: 0 10px;
        justify-content: space-around;
        li{
            justify-content: space-around;
        }
    }
`;