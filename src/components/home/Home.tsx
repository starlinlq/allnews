import { Container, Divider, Section } from "./home.elements";
import { Column, Center, Grid } from "./components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
const Home: React.FC = () => {
  const { data } = useTypedSelector((state) => state.newsData);
  console.log("hey");
  return (
    <Container>
      <Section width="250px">
        {data.articles.slice(0, 4).map((article) => (
          <Column
            author={article.author ? article.author : ""}
            description={article.description}
            title={article.title}
          />
        ))}
      </Section>
      <Divider change={true} />
      <Section width="500px">
        {data.articles.slice(4, 6).map((article) => (
          <Center
            imgUrl={article.urlToImage}
            title={article.title}
            author={article.author ? article.author : ""}
            description={article.description}
          />
        ))}
      </Section>
      <Divider change={true} />

      <Section width="350px">
        {data.articles.slice(6, 10).map((article) => (
          <Grid
            imgUrl={article.urlToImage}
            title={article.title}
            author={article.author ? article.author : ""}
          />
        ))}
      </Section>
      <Divider change={true} />
      <Section width="250px">
        {data.articles.slice(11, 14).map((article) => (
          <Column
            author={article.author ? article.author : ""}
            description={article.description}
            title={article.title}
          />
        ))}
      </Section>
    </Container>
  );
};

export default Home;
