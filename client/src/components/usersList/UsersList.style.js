import styled from 'styled-components';

export const Styled = styled.div`
    width: 250px;
    ul{
        list-style: none;
        margin: 0;
        width: 250px;
        position: absolute;
        top: 52px;
        bottom: 0;
        overflow-y: auto;
        padding: 0;
        li{
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
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
`;

export const Separator = styled.div`
    width: 90%;
    height: 1px;
    background: gray;
    margin: auto;
`;
