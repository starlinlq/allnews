import { Container, Input, Form, Button, P, Wrapper } from "./search.elements";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getSpecificNewsbySearch } from "../../store/action-creators";
const Search: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm("");
    dispatch(getSpecificNewsbySearch(term));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input value={term} onChange={onChange} />
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
