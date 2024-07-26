import Routing from "./routes/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ColorModeContext, useMode} from './themes/themePalette';
import { CssBaseline, ThemeProvider } from '@mui/material';


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routing />
        <ToastContainer position="bottom-right" toastClassName="rounded-xl"  />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
