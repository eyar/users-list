import styled from 'styled-components';

export const Styled = styled.div`
    width: 250px;
    ul{
        list-style: none;
        margin: 0;
        padding: 0 20px;
        width: 250px;
        position: absolute;
        top: 52px;
        bottom: 0;
        overflow-y: auto;
        li{
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
            div{
                display: flex;
                margin: auto 0;
            }
            img{
                border-radius: 50%;
            }
        }
    }
`;
