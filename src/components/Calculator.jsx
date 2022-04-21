import Theme from './Theme'
import Button from './shared/Button'

const Calculator = () => {
  return (
    <main>
      <Theme />
      <div className="calculator">
        <div className="screen">
          <span id="label">399,981</span>
        </div>
        <div className="keypad">
          <Button btnKey='7' />
          <Button btnKey='8' />
          <Button btnKey='9' />
          <Button btnKey='DEL' classname='clear' />
          <Button btnKey='4' />
          <Button btnKey='5' />
          <Button btnKey='6' />
          <Button btnKey='+' />
          <Button btnKey='1' />
          <Button btnKey='2' />
          <Button btnKey='3' />
          <Button btnKey='-' />
          <Button btnKey='.' />
          <Button btnKey='0' />
          <Button btnKey='/' />
          <Button btnKey='x' />
          <Button btnKey='RESET' classname='clear' />
          <Button btnKey='=' classname='equal' />
        </div>
      </div>
    </main>
  )
}

export default Calculator
