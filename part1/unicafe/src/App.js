import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = (props) => {
       
  return (
    <div>
      <p>good {props.list[0]}</p>
      <p>neutral {props.list[1]}</p>
      <p>bad {props.list[2]}</p>
    </div>
  )  
}

const App = () => {  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = (response, newValue) => {
    console.log(response, newValue)
    switch(response) {
      case "good":
        setGood(newValue);
        break;
      case "neutral":
        setNeutral(newValue);
        break;
      case "bad":
        setBad(newValue);
        break;
      default:
        break;
    }      
  }

  return (
    <div>
      <Header text="give feedback" />      
      <Button handleClick={() => setToValue("good", good+1)} text="good"/>
      <Button handleClick={() => setToValue("neutral", neutral+1)} text="neutral"/>
      <Button handleClick={() => setToValue("bad", bad+1)} text="bad"/>      
      <Header text="statistics" />    
      <Statistics list={[good, neutral, bad]} />
    </div>
  )
}

export default App
