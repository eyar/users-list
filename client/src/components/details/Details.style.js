import styled from 'styled-components';
import { desktopBreakpoint } from '../../features/Themes';

export const Styled = styled.div`
    margin: 10px;
    line-height: 1.7;
    button{
        font-size: 20rem;
        border-radius: 10px;
    }
    .buttons{
        display: flex;
        justify-content: space-evenly;
        margin: 18px;
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
        button{
            width: 100px;
            margin: auto;
            display: flex;
            padding: 15px;
            height: 60px;
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
        form button{
            margin-top: 10px;
        }
    }
    @media (max-width: ${desktopBreakpoint}px){
        button{
            width: 130px;
            height: 70px;
        }
        img{
            display: flex;
            margin: 10px auto;
        }
        form{
            display: block;
            input{
                width: 300px;
                height: 20px;
                display: block;
                margin: 10px auto;
                font-size: 20rem;
            }
            button{
                height: 60px;
                border-radius: 10px;
            }
        }
    }
`;
