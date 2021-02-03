import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  Container,
  Img,
  Title,
  Content,
  Published,
  Author,
  Description,
  Section,
} from "./article.elements";

const Article: React.FC = () => {
  const { data } = useTypedSelector((state) => state.newsData);
  return (
    <Container>
      {data.articles.map((article) => (
        <Section key={article.publishedAt}>
          <Img src={article.urlToImage} alt={article.title} />
          <Title>{article.title}</Title>
        </Section>
      ))}
    </Container>
  );
};

export default Article;
