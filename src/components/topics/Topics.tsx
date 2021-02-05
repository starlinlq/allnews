import { Container, Title } from "./topics.elements";
import { useState, useEffect } from "react";
import { TopicNames } from "./types";
import { useDispatch } from "react-redux";
import {
  getSpecificNewsByCategory,
  getNewsData,
} from "../../store/action-creators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
const topicNames: TopicNames = [
  "Trending",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
  "General",
];
const Topics: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.newsData);
  const [currentTopic, setCurrent] = useState("Trending");
  const dispatch = useDispatch();
  const onClick = (term: string) => {
    if (term === "Trending") {
      dispatch(getNewsData());
    }
    setCurrent(term);
    dispatch(getSpecificNewsByCategory(term));
  };

  useEffect(
    function () {
      setCurrent("Trending");
    },
    [currentCountry]
  );
  return (
    <Container>
      {topicNames.map((name) => (
        <Title
          currentTopic={currentTopic}
          topicName={name}
          key={name}
          onClick={() => onClick(name)}
        >
          # {name}
        </Title>
      ))}
    </Container>
  );
};

export default Topics;
