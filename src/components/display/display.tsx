import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewsData } from "../../store/action-creators";
import { Container, Wrapper } from "./display.elements";
import { Topics, Search, Article, Collection, Home } from "../";

const Display: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(getNewsData());
  }, []);

  return (
    <Wrapper>
      <Container>
        <Topics />
        <Search />
      </Container>
      <div>
        <Collection />
        <Article />
      </div>
    </Wrapper>
  );
};

export default Display;
