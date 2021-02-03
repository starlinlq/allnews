import { Container, Title } from "./topics.elements";
import { TopicNames } from "./types";

const topicNames: TopicNames = [
  "Popular",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
  "General",
  "IT",
  "Trend",
];
const Topics: React.FC = () => {
  return (
    <Container>
      {topicNames.map((name) => (
        <Title key={name}># {name}</Title>
      ))}
    </Container>
  );
};

export default Topics;
