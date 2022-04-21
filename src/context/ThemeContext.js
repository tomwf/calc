import { createContext } from 'react'

const ThemeContext = createContext({
  theme: 'theme-1',
  toggleTheme: () => {}
})

export default ThemeContext
