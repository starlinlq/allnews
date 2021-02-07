import styled from "styled-components";
export const Container = styled.div`
margin-left: 6rem;
display: flex;`;
export const Description = styled.p`
color: grey;
margin: 7px 0;`;
interface Width{
    width: string
};
export const Title = styled.h2``;
export const Author = styled.h5`
color: grey;`
export const Wrapper = styled.div`
display: flex;
align-items: center;`;
export const Section = styled.div<Width>`
width: ${({width})=> width}

`;

export const Content = styled.h1`
margin-bottom: 1rem;`

interface Divide{
    change: boolean;
}
export const Divider = styled.hr<Divide>`
margin: ${({change})=> change ? `0 1.5rem` : '1.5rem 0'};



`;
interface Image{
    width:string,
    height: string;
}
export const Img = styled.img<Image>`
width: ${({width})=> width};
height: ${({height})=>height};
object-fit:cover;

;`