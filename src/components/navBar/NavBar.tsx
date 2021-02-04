import { Nav, Wrapper, Section, Divider } from "./navBar.elements";
import { BsNewspaper } from "react-icons/bs";
import { Country } from "../";
const NavBar: React.FC = () => {
  return (
    <>
      <Nav>
        <Wrapper>
          <BsNewspaper />
        </Wrapper>
        <Divider />

        <Section>
          <Country />
        </Section>
      </Nav>
    </>
  );
};

export default NavBar;
