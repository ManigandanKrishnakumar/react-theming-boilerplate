import './App.scss';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { THEMES, THEMES_MAP } from './constants/app-constants';
import GlobalStyles from './style-components/GlobalStyles';
import { getTheme } from './service/themeService';
import {FaReact} from 'react-icons/fa';
import ThemeButton from './components/ThemeButton/ThemeButton';

function App() {
  const [uiTheme, setUiTheme] = useState(THEMES_MAP.LIGHT);
  return (
    <ThemeProvider theme={getTheme(uiTheme)}>
      <GlobalStyles />
    
    <div className="App">
      <header className="App-header">
        <FaReact className="logo" />
        <p className="desc">
          Demo for react theming with best practices to ensure scalability of code.
        </p>
        <div className="theme-buttons">
          {
            THEMES.map((theme, i) => {
              return(
                <ThemeButton key={i} name={theme} isSelected={uiTheme === theme} onClick={setUiTheme}/>
              )
            })
          }
        </div>
      </header>

      <footer className="footer">
        <p className="link"><span className="label">Repo Link:</span> <a href="https://github.com/ManigandanKrishnakumar/react-theming" className="link-address">https://github.com/ManigandanKrishnakumar/react-theming </a> </p>
      </footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
