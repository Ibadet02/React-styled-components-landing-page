import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul{
        flex: 1;
    }

    @media(max-width: ${({theme})=>theme.mobile}){
        flex-direction: column;
        text-align: center;
        gap: 30px;
    }
    div{
        @media(max-width: ${({theme})=>theme.mobile}){
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    }
`