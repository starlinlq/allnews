import styled from "styled-components";

export const Container = styled.div`
margin: 2rem 0;
margin-left: 6rem;
display: flex;`;
export const Input = styled.input`
padding: 7px 0;
border: 1px solid black;
border-radius: 16px;
text-align: center;`;
export const Form = styled.form``;
export const Remove = styled.button`
margin: auto;

background: none;
border: 1px solid red;
padding: 0 10px;
border-radius: 50px;
cursor: pointer;
display: none;
color: ${({theme})=> theme.fontColor.main};
`

export const Wrapper  = styled.div`
position: relative;
width: 100px;
height: 55px;
text-align: center;
&:hover{
    ${Remove}{
        display: block;
        
    }
}
`;

export const Section = styled.div`
display: flex;

`
export const CollectName = styled.p`
border: ${({theme})=>`1px solid ${theme.fontColor.main}`};
cursor: pointer;
border-radius: 16px;
padding:6px 1.5rem;
margin-left: 10px;
margin-bottom: 2px;
color: ${({theme})=>theme.fontColor.main};

&:hover{
    border-color: purple;
}`;
export const Button = styled.button`
height: fit-content;
background-color: ${({theme})=>theme.fontColor.main};
border: 1px solid white;
color: ${({theme})=> theme.background};
border-radius: 16px;
padding: 9.5px 1.5rem;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border-color: black;
}
`