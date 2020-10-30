import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import Toggle from "./Toggle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Toggle />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
