const Button = ({btnKey, classname='default'}) => {
  
  function handleKeydown(event) {
    event.target.classList.add('pressed')
  }

  function handleKeyup(event) {
    event.target.classList.remove('pressed')
  }

  return (
    <button className={'btn ' + classname} onMouseDown={handleKeydown} onMouseUp={handleKeyup} onMouseLeave={handleKeyup}>
      {btnKey}
    </button>
  )
}

export default Button
