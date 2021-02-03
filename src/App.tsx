import { Display, NavBar, Layout } from "./components";
import { ThemeProvider } from "styled-components";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { theme } from "./styles/my-theme";
import { Global } from "./styles/global";

const App: React.FC = () => {
  const state = useTypedSelector((state) => state);
  console.log(state);
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Layout>
        <NavBar />
        <Display />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
