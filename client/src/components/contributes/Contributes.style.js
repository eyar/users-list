import styled from 'styled-components';
import { desktopBreakpoint } from '../../features/Themes';

export default styled.ul`
    list-style: none;
    margin-top: 0;
    h2{
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
    @media (min-width: ${desktopBreakpoint}px){
        h2{
            margin-bottom: 10px;
        }
        li{
            justify-content: space-between;
        }
    }
    @media (max-width: ${desktopBreakpoint}px){
        padding: 0 10px;
        justify-content: space-around;
        h2{
            font-size: 35rem;
            margin: 0 0 10px 0;
        }
        select{
            font-size: 20rem;
        }
        li{
            justify-content: space-around;
            font-size: 20rem;
        }
    }
`;