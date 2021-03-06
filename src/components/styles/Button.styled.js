import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({bg})=>bg || '#fff'};
    color: ${({color})=>color || '#333'};
    transition: hover 300ms;
    width: ${({width})=>width};
    &:hover{
        opacity: .9;
    }
    &:active{
        transform: scale(.98);
    }
`