import React from "react";
import { Img, Title, Description, Author, Divider } from "../home.elements";
import { Data } from "./types";
const Center: React.FC<Data> = ({ author, description, title, imgUrl }) => {
  return (
    <>
      <Img width="500px" height="330px" src={imgUrl} alt="tesla" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Author>{author}</Author>
      <Divider change={false} />
    </>
  );
};

export default Center;
