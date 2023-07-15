import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticLine = (props) => {
  return <p>{props.text} {props.value}</p>
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
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />  
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />          
    </div>
  )  
}

const App = () => {  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />      
      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="bad"/>      
      <Header text="statistics" />    
      <Statistics list={[good, neutral, bad]} />
    </div>
  )
}

export default App
