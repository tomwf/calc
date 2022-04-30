const Button = ({btnKey, classname='default', handleInput, id, value=btnKey}) => {
  
  function handleMouseDown(event) {
    event.target.classList.add('pressed')
  }

  function handleMouseUp(event) {
    event.target.classList.remove('pressed')
  }

  function handleMouseLeave(event) {
    event.target.classList.remove('pressed')
  }

  return (
    <button className={'btn ' + classname} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onClick={(event) => handleInput(event, value)} id={id} value={value}>
      {btnKey}
    </button>
  )
}

export default Button
