import Theme from './Theme'
import Button from './shared/Button'
import { useState } from 'react'

const Calculator = () => {
  
  function handleInput(event, input) {

    function addHighlight() {
      target.classList.add('operation')
    }

    function removeHighlight() {
      document.getElementById(operation).classList.remove('operation')
    }

    function calculate() {

      switch(prevOp) {
        case 'add':
          result = prevNum + label
          break
        case 'subtract':
          result = prevNum - label
          break
        case 'multiply':
          result = prevNum * label
          break
        case 'divide':
          result = prevNum / label
          break
        default:
          console.log('invalid operation')
      }

    }

    function operate(op) {

      // First input
      if (prevNum === undefined) {

        // Negative number
        if (op === 'subtract') {
          setLabel('-')
          return
        }

        result = label

        setLabel(result)
        setOperation(op)
        setPrevNum(result)
        setPrevOp(op)

        return
      }

      // User changes operation
      if (operation) {
        removeHighlight()

        setOperation(op)
        setPrevOp(op)

        return
      }

      addHighlight()

      // Operation after equal sign pressed
      if (!prevOp) {
        setPrevOp(op)
        setOperation(op)
        setPrevNum(label)
        return
      }

      calculate()

      setLabel(result)
      setOperation(op)
      setPrevNum(result)
      setPrevOp(op)
    }

    const target = event.target
    let result

    switch(input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':

        if (prevNum === undefined && label === 0) {

          // Prevent leading zero
          setLabel(+input)

          return

        } else {

          if (operation) {
            // Clear screen after operation input
            removeHighlight()

            setLabel(+input)
            setOperation('')
          } else {
            // Append digit to screen on multiple number input
            const digit = label + input

            setLabel(+digit)
          }

        }

        break

      case '.':

        // Add leading zero if missing
        if (!/\./.test(label.toString())) {
          setLabel(label + '.')
        }

        break

      case '+':

        operate('add')
        break

      case '-':

        operate('subtract')
        break

      case '*':

        operate('multiply')
        break

      case '/':

        operate('divide')
        break

      case 'DEL':

        // Delete one digit
        result = Math.floor(label / 10)

        setLabel(result)
        break

      case 'RESET':

        if (operation) {
          removeHighlight()
        }

        setLabel(0)
        setOperation('')
        setPrevNum()
        setPrevOp('')

        break

      case '=':

        if (prevOp === '' || operation) return

        calculate()

        setPrevOp('')
        setLabel(result)

        break

      default:
        console.log('input not valid: ' + input)
    }
  }

  const [label, setLabel] = useState(0)
  const [operation, setOperation] = useState('')
  const [prevNum, setPrevNum] = useState()
  const [prevOp, setPrevOp] = useState('')

  return (
    <main>
      <Theme />
      <div className="calculator">
        <div className="screen">
          <span className="screen__label">{label}</span>
        </div>
        <div className="keypad">
          <Button btnKey='7' handleInput={handleInput} />
          <Button btnKey='8' handleInput={handleInput} />
          <Button btnKey='9' handleInput={handleInput} />
          <Button btnKey='DEL' classname='clear' handleInput={handleInput} />
          <Button btnKey='4' handleInput={handleInput} />
          <Button btnKey='5' handleInput={handleInput} />
          <Button btnKey='6' handleInput={handleInput} />
          <Button btnKey='+' handleInput={handleInput} id='add' value='+' />
          <Button btnKey='1' handleInput={handleInput} />
          <Button btnKey='2' handleInput={handleInput} />
          <Button btnKey='3' handleInput={handleInput} />
          <Button btnKey='-' handleInput={handleInput} id='subtract' value='-' />
          <Button btnKey='.' handleInput={handleInput} />
          <Button btnKey='0' handleInput={handleInput} />
          <Button btnKey='/' handleInput={handleInput} id='divide' value='/' />
          <Button btnKey='x' handleInput={handleInput} id='multiply' value='*' />
          <Button btnKey='RESET' classname='clear' handleInput={handleInput} />
          <Button btnKey='=' classname='equal' handleInput={handleInput} />
        </div>
      </div>
    </main>
  )
}

export default Calculator
