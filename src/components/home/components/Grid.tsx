import React from "react";
import { Img, Author, Title, Divider, Wrapper } from "../home.elements";
import { Data } from "./types";
const Grid: React.FC<Data> = ({ imgUrl, author, title }) => {
  return (
    <>
      <Wrapper>
        <div>
          <Title>{title}</Title>
          <br />
          <Author>{author}</Author>
        </div>
        <Img width="150px" height="150px" src={imgUrl} alt={title} />
      </Wrapper>
      <Divider change={false} />
    </>
  );
};

export default Grid;
