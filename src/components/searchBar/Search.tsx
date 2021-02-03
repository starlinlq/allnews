import { Container, Input, Form, Button, P, Wrapper } from "./search.elements";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
const Search: React.FC = () => {
  const [term, setTerm] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input value={term} onChange={(e) => setTerm(e.target.value)} />
        <Button type="submit">
          <Wrapper>
            {" "}
            <BiSearch />
          </Wrapper>
        </Button>
      </Form>
    </Container>
  );
};

export default Search;
