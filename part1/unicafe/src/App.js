import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = (props) => {
  let [good, neutral, bad] = props.list
  console.log("good", good, "\nneutral", neutral, "\nbad", bad)

  if (props.list.every((value) => value == 0)){
    return <div>No feedback given</div>
  }

  let all = 0
  props.list.forEach( num => {
    all += num;
  })
  let average = (good - bad) / all
  let positive = good / all*100

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
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
