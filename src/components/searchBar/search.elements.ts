import styled from "styled-components";

export const Container = styled.div`
margin-left:10rem;
display: flex;
align-items: center;`;
export const Wrapper = styled.div`
color:${({theme})=>theme.fontColor.main};
font-size: 1.2rem;
cursor: pointer;`;


export const Input = styled.input`
font-weight: bold;
border: none;
width: 30rem;
text-align: center;
background: ${({theme})=>theme.background};
border-bottom: ${({theme})=>`1px solid ${theme.fontColor.main}`};
color: ${({theme})=>theme.fontColor.main};
&:focus{
    border: none;
}
`
export const P = styled.p`
font-weight: bold;
border-bottom: 1px solid black;`;
export const Form = styled.form`
display: flex;
`

export const Button = styled.button`
border: none;
border-bottom: 1px solid black;

background: none;
`