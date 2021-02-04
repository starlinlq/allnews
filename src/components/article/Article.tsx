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
  Source,
  Wrapper,
} from "./article.elements";

const Article: React.FC = () => {
  const { data } = useTypedSelector((state) => state.newsData);
  return (
    <Container>
      {data.articles.map((article) => (
        <div key={article.url}>
          {article.content && article.urlToImage && (
            <Section>
              <div>
                {" "}
                <Img src={article.urlToImage} alt={article.title} />
              </div>
              <div style={{ marginLeft: "2rem" }}>
                {article.author && (
                  <Author>{article.author.slice(0, 12)} </Author>
                )}
                <Wrapper>
                  <Source>
                    {article.source.name && article.source.name.toUpperCase()}
                  </Source>{" "}
                  <Published> {article.publishedAt}</Published>{" "}
                </Wrapper>
                <Title>{article.title}</Title>
                <Description>{article.description}</Description>
                <a href={article.url} target="_blank">
                  {" "}
                  Read More
                </a>
              </div>
            </Section>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Article;
