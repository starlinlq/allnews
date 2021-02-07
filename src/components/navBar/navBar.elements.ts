import styled from "styled-components"

export const IconWrapper = styled.div`
text-align: center;
font-size: 2rem;
cursor: pointer;
color: ${({theme})=>theme.fontColor.main};

 `;
export const Nav = styled.div`
height: 100vh;
z-index: 999;
position: fixed;
width: fit-content;
padding: 0 10px;
border-right: solid 1px lightgrey;
`

export const Divider = styled.hr`
margin: 2rem 0;
padding: 0 15px`

export const Section = styled.div``;

export const Wrapper = styled.div`
text-align: center;
font-size: 2rem;
cursor: pointer;
margin-top: 3rem;
color: ${({theme})=> theme.fontColor.main};

`;
