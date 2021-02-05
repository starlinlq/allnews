import { Nav, Wrapper, Section, Divider, IconWrapper } from "./navBar.elements";
import { BsNewspaper } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { CgDarkMode } from "react-icons/cg";
import { FiSun, FiMoon } from "react-icons/fi";
import { Country } from "../";
import { setTheme } from "../../store/action-creators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
const NavBar: React.FC = () => {
  const { theme } = useTypedSelector((state) => state.newsData);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setTheme());
  };
  return (
    <>
      <Nav>
        <Wrapper>
          <BsNewspaper />
        </Wrapper>
        <Divider />
        <IconWrapper onClick={onClick}>
          {theme ? <FiSun /> : <FiMoon />}
        </IconWrapper>
        <Divider />
        <Section>
          <Country />
        </Section>
      </Nav>
    </>
  );
};

export default NavBar;
