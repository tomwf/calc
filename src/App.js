import './App.scss';
import { useState } from 'react'

import ThemeContext from './context/ThemeContext'
import Calculator from './components/Calculator'
import Footer from './components/shared/Footer'

function App() {
  
  function toggleTheme(event) {
    const selectedTheme = event.target.value
    setTheme(selectedTheme)
  }

  const [theme, setTheme] = useState('theme-1')

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={"app " + theme}>
        <Calculator />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
