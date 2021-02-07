import styled from "styled-components";
interface Current {
  currentTopic: string;
  topicName: string;
}
export const Container  = styled.div`
display: flex;
margin-left: 6rem;
font-size: 1.2rem;

`

;
export const Title = styled.h4<Current>`
margin: 0 1rem;
color: grey;
color: ${({topicName, currentTopic, theme})=> topicName === currentTopic && theme.fontColor.main};
font-family: 'Roboto', sans-serif;
cursor: pointer;


&:hover{
    color: black;
}


`