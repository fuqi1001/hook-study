import React, { useContext, useState } from 'react';
import Toolbar from './Toolbar';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  }
}

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});

function ContextComponent() {
  
  const [theme, setTheme] = useState(themes.dark);

  return(
    <ThemeContext.Provider value={{
      theme: theme,
      toggleTheme: () => setTheme(theme === themes.dark ? themes.light : themes.dark)
    }}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default ContextComponent;