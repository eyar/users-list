import styled from 'styled-components';
import { desktopBreakpoint } from '../../features/Themes';

export const Styled = styled.div`
    margin: 10px;
    line-height: 1.7;
    .buttons{
        display: flex;
        justify-content: space-evenly;
        margin: 18px;
        button{
            font-size: 20rem;
            &:active {
                color: blue;
            }
        }
    }
    img{
        border-radius: 10px;
    }
    form{
        display: flex;
        flex-direction: column;
        > *{
            margin: 10px;
        }
        input[type=submit]{
            width: 100px;
            margin: auto;
        }
    }
    @media (min-width: ${desktopBreakpoint}px){
        button{
            width: 150px;
        }
        img{
            margin-right: 10px;
        }
        .text{
            float: right;
        }
    }
    @media (max-width: ${desktopBreakpoint}px){
        button{
            width: 100px;
        }
        img{
            display: flex;
            margin: 10px auto;
        }
        form{
            display: block;
            input{
                width: 300px;
                display: block;
                margin: 10px auto;
            }
        }
    }
`;
