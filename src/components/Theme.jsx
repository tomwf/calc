import { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Theme = () => {
  return (
    <div className="theme__container">
      <div className="theme">
        <div className="theme__text">
          <p>THEME</p>
        </div>
        <div className="theme__number">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className="theme__toggle">
          <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
              <div className="theme__toggle__switch">
                <label>
                  <input type="radio" name="radio" value="theme-1" onChange={toggleTheme} checked={theme === 'theme-1'} />
                  <span className="checkmark"></span>
                </label>
                <label>
                  <input type="radio" name="radio" value="theme-2" onChange={toggleTheme} />
                  <span className="checkmark"></span>
                </label>
                <label>
                  <input type="radio" name="radio" value="theme-3" onChange={toggleTheme} />
                  <span className="checkmark"></span>
                </label>
              </div>
            )}
          </ThemeContext.Consumer>
        </div>
      </div>
    </div>
  )
}

export default Theme
