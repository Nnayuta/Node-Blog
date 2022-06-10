import styled from "styled-components";

export const Button = styled.a`
background: transparent;
border: none;
font-family: 'Material Icons';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 36px;
color: #9274EC;
height: 32px;
margin-left: 12px;
user-select: none;

  :hover {
    cursor: pointer;
    color: #F0F0F0;
  }

  &#Active{
    color: rgba(146, 116, 236, 0.4);
  }
`