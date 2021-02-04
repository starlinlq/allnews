import styled from "styled-components";

interface Current {
    ISO: string;
    country: string;
}

export const Container = styled.div`
display: flex;
flex-direction: column;`;
export const ImgWrapper = styled.div`
`;

export const Img = styled.img<Current>`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
margin: 10px 0;
border: 4px solid white;
border-color: ${({country, ISO})=> country === ISO &&  "green"};
cursor: pointer;
&:hover{
    border-color: lightblue;
    
}

`
