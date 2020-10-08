import styled from 'styled-components';
import { desktopBreakpoint } from '../../features/Themes';

export const Styled = styled.div`
    z-index: 0;
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        li{
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            cursor: pointer;
            div{
                display: flex;
                margin: auto 0;
            }
            img{
                border-radius: 50%;
            }
            &:hover{
                background-color: lightgray;
            }
        }
    }
    @media (min-width: ${desktopBreakpoint}px){
        width: 270px;
        ul{
            width: 270px;
            position: absolute;
            top: 52px;
            bottom: 0;
            overflow-y: auto;
        }
    }
`;

export const Separator = styled.div`
    width: 90%;
    height: 1px;
    background: gray;
    margin: auto;
`;
