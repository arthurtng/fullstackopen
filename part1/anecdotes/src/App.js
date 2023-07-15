import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const getRandomIndex = (list) => {
    let index = selected
    while (index == selected){
      index = Math.floor(Math.random() * list.length)
    }
    console.log("Random Index: ", index)
    return index
  }

  const setRandomIndex = (list) => {
    setSelected(getRandomIndex(list))
  }  

  const addVote = (index) => {
    const copy = [...votes]
    copy[index] += 1
    setVotes(copy)
    console.log("votes for", anecdotes[index], ":", copy[index])
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={() => addVote(selected)} text="vote" />
      <Button handleClick={() => setRandomIndex(anecdotes)} text="next anecdote" />
    </div>
  )
}

export default App
