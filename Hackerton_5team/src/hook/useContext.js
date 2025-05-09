import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return <button className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>Theme Button</button>;
}

export default ThemedButton;