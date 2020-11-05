import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --main-bg-color: ${(props) => props.theme.mainBgColor};
    --highlight-color: ${(props) => props.theme.highlightColor};
    --font-color: ${(props) => props.theme.fontColor};
    --highlight-contrast: ${(props) => props.theme.highlightContrast};
    --border-color: ${(props) => props.theme.borderColor};
  }
`;

export default GlobalStyles;
