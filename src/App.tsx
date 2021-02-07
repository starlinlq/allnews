import { Display, NavBar, Layout } from "./components";
import { ThemeProvider } from "styled-components";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { lightTheme, darkTheme } from "./styles/my-theme";
import { Global } from "./styles/global";

const App: React.FC = () => {
  const { theme } = useTypedSelector((state) => state.newsData);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Global />
      <Layout>
        <NavBar />
        <Display />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
