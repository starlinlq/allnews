import { Display } from "./components";
import { ThemeProvider } from "styled-components";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { theme } from "./styles/my-theme";
const App: React.FC = () => {
  const state = useTypedSelector((state) => state);
  console.log(state);
  return (
    <ThemeProvider theme={theme}>
      <Display />
    </ThemeProvider>
  );
};

export default App;
