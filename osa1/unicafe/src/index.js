import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const pressGood = () => {
    setGood(good+1)
  }
  const pressNeutral = () => {
    setNeutral(neutral+1)
  }
  const pressBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <div>
        <Button onClick={pressGood} text="good" />
        <Button onClick={pressNeutral} text="neutral" />
        <Button onClick={pressBad} text="bad" />
      </div>

      <div>
        <h1>statistics</h1>
      </div>

      <div>
        <p>good {good}</p>
      </div>


      <div>
        <p>neutral {neutral}</p>
      </div>


      <div>
        <p>bad {bad}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)