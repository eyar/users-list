import styled from 'styled-components';

export const Styled = styled.div`
    margin: 10px;
    line-height: 1.7;
    img{
        border-radius: 10px;
        margin-right: 10px;
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
`;

export const Text = styled.div`
    float: right;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 18px;
    button{
        font-size: 20rem;
        padding:0.35em 1.2em;
        &:active {
            color: blue;
        }
    }
`;
