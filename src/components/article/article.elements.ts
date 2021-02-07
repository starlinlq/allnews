import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
margin-bottom: 5px;`;
export const Source = styled.p`
border: 1px solid white;
border-radius: 7px;
margin: 5px 3px;
font-size: 13px;
padding: 3px 7px;
background: #845ec2;
color: white;
font-family: 'Montserrat', sans-serif;
`;
export const Container = styled.div`
display: flex;
flex-wrap:wrap;
margin-left: 6rem;
margin-top: 2rem;
 `;
export const Title = styled.h2`
width: 510px;
font-family: 'Merriweather', serif;
color: ${({theme})=> theme.fontColor.main};


`;
export const Content = styled.p`
margin-left: 6rem;
font-size: 2rem;
color: ${({theme}) => theme.fontColor.main};

`;

export const Published = styled(Source)`
background: none;
color: ${({theme})=>theme.fontColor.main};
border-color:${({theme})=>theme.fontColor.main};
`;

export const Author = styled.h5`
font-family: 'Merriweather', serif;
margin-bottom: 10px;`;
export const Img = styled.img`
width: 300px;
height: 250px;
object-fit: cover`
export const Description = styled.p`
margin-top: 1rem;
max-width: 510px;
color: grey;`;
export const Section = styled.div`
width: fit-content;
margin: 1rem;
margin-left: 0;
display: flex;
border: 1px solid transparent;

&:hover{
    border-color: black;
}

`
