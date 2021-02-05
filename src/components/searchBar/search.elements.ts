import styled from "styled-components";

export const Container = styled.div`
margin-left:14rem;
display: flex;
align-items: center;`;
export const Wrapper = styled.div`
font-size: 1.2rem;
cursor: pointer;`;
export const Input = styled.input`
font-weight: bold;
border: none;
border-bottom: 1px solid black;
width: 36rem;
text-align: center;

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