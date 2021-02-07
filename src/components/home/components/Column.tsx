import React from "react";
import { Title, Description, Author, Divider } from "../home.elements";
import { Data } from "./types";
const Column: React.FC<Data> = ({ author, title, description }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Author>{author}</Author>
      <Divider change={false} />
    </>
  );
};

export default Column;
