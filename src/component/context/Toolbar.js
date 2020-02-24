import React, { Fragment, useContext, useEffect } from 'react';
import { ThemeContext } from './ContextComponent';

function Toolbar({...props}) {
  return(
    <Fragment>
      <ThemeButton />
    </Fragment>
  )
}

function ThemeButton() {
  
  return (
    <ThemeContext.Consumer>
      {
        ({theme, toggleTheme}) => (
          <button
            onClick={toggleTheme}
            style={{ background: theme.background, color: theme.foreground }}
          >
            Styled Context
          </button>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default Toolbar;