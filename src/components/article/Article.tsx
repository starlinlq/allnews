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
  const { loading } = useTypedSelector((state) => state.newsData);

  if (data.articles.length === 0 && !loading) {
    return (
      <>
        <Content>
          not results found..... Please try another search or collection
        </Content>
      </>
    );
  }

  if (loading) {
    return (
      <>
        {" "}
        <Content>Loading...</Content>{" "}
      </>
    );
  }

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
              <div
                style={{
                  marginLeft: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
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
                <Description>
                  {article.description}{" "}
                  <a
                    style={{ textDecoration: "none", marginLeft: "10px" }}
                    href={article.url}
                    target="_blank"
                  >
                    {" "}
                    Read More
                  </a>
                </Description>
              </div>
            </Section>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Article;
