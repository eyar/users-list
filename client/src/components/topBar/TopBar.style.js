import styled from 'styled-components';
import { desktopBreakpoint } from '../../features/Themes';

export const Styled = styled.div`
    border-bottom: 2px solid;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${props=>props.theme.bg.primary};
    color: ${props=>props.theme.text.primary};
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
