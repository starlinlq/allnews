import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Input,
  Form,
  Section,
  CollectName,
  Button,
  Wrapper,
  Remove,
} from "./collection.elements";
import { getSpecificNewsbySearch } from "../../store/action-creators";

type Data = string[];

const Collection: React.FC = () => {
  const dispatch = useDispatch();
  const [collection, setCollection] = useState<Data>([]);
  const [name, setName] = useState("");
  const [addCollection, setAddCollection] = useState(false);

  useEffect(function () {
    const getCollection = localStorage.getItem("collection");
    if (getCollection) {
      const data = JSON.parse(getCollection);
      setCollection(data);
    }
  }, []);

  useEffect(
    function () {
      localStorage.setItem("collection", JSON.stringify(collection));
    },
    [collection]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCollection([name, ...collection]);
    setName("");
    setAddCollection(false);
  };

  const onClick = (term: string) => {
    dispatch(getSpecificNewsbySearch(term));
  };
  const onRemove = (term: string) => {
    const itemRemoved = collection.filter((name) => term !== name);
    setCollection(itemRemoved);
  };

  return (
    <Container>
      {addCollection ? (
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="enter collection"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form>
      ) : (
        <Button onClick={() => setAddCollection(true)}>+add collection</Button>
      )}
      <Section>
        {collection.map((name) => (
          <Wrapper key={name}>
            <CollectName onClick={() => onClick(name)}>{name}</CollectName>
            <Remove onClick={() => onRemove(name)}>x</Remove>
          </Wrapper>
        ))}
      </Section>
    </Container>
  );
};

export default Collection;
