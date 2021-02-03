import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewsData } from "../../store/action-creators";
import { Container } from "./display.elements";

const Display: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(getNewsData());
  }, []);

  return <Container>hello</Container>;
};

export default Display;
