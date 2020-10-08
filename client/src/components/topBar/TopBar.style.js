import styled from 'styled-components';
import { desktopBreakpoint } from '../../features/Themes';

export const Styled = styled.div`
    border-bottom: 2px solid;
    position: fixed;
    top: 0;
    width: 100%;
    h1{
        font-size: 35rem;
        font-weight: bold;
        display: inline;
        margin-left: 10px;
    }
    i{
        font-size:24px;
        margin: 0px 50px;
        cursor: pointer;
    }
    @media (min-width: ${desktopBreakpoint}px){
        height: 50px;
    }
    @media (max-width: ${desktopBreakpoint}px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        h1{
            margin: auto;
        }
        i{
            margin-top: 10px
        }
    }
`;
