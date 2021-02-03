import { Nav, Wrapper } from "./navBar.elements";
import { BsNewspaper } from "react-icons/bs";
const NavBar: React.FC = () => {
  return (
    <>
      <Nav>
        <Wrapper>
          <BsNewspaper />
        </Wrapper>
      </Nav>
    </>
  );
};

export default NavBar;
