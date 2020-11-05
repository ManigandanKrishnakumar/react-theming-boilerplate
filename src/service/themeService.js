import { THEMES_MAP } from "../constants/app-constants";
import { DARK, FACEBOOK, LIGHT, SWIGGY } from "../themes";

export const getTheme = (theme) => {
  const themes = {
    [THEMES_MAP.DARK] : DARK,
    [THEMES_MAP.LIGHT] : LIGHT,
    [THEMES_MAP.SWIGGY]: SWIGGY,
    [THEMES_MAP.FACEBOOK] : FACEBOOK,
    default: LIGHT 
  };

  const themeData = themes[theme] || themes.default;
  return themeData;
 };