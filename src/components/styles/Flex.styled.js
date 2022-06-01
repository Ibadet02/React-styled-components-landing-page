import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    & > div,
    & > ul{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
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